"use client";
import { useCallback, useRef, useState, useEffect } from 'react';

interface ScreenReaderOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

export function useScreenReader(options: ScreenReaderOptions = {}) {
  const {
    rate = 1.0,
    pitch = 1.0,
    volume = 1.0,
    lang = 'en-US',
  } = options;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const queueRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);

  // Load persisted preference
  useEffect(() => {
    const saved = localStorage.getItem('resona-screen-reader') === 'true';
    setIsEnabled(saved);
  }, []);

  // Sync to localStorage
  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => {
      const next = !prev;
      localStorage.setItem('resona-screen-reader', String(next));
      if (!next) {
        window.speechSynthesis?.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
      }
      return next;
    });
  }, []);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.lang = lang;
    utterance.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
    utterance.onend = () => { setIsSpeaking(false); setIsPaused(false); };
    utterance.onerror = () => { setIsSpeaking(false); setIsPaused(false); };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [rate, pitch, volume, lang]);

  const speakFeedItem = useCallback((post: {
    author: string;
    type: string;
    field: string;
    title: string;
    summary: string;
    likes?: number;
    comments?: number;
    time?: string;
  }) => {
    const script = `${post.type.toLowerCase()} by ${post.author}, from ${post.field}. ${post.title}. ${post.summary}. ${post.likes ?? 0} likes and ${post.comments ?? 0} comments. Posted ${post.time ?? 'recently'}.`;
    speak(script);
  }, [speak]);

  const loadQueue = useCallback((posts: Array<{
    author: string;
    type: string;
    field: string;
    title: string;
    summary: string;
    likes?: number;
    comments?: number;
    time?: string;
  }>) => {
    queueRef.current = posts.map(post =>
      `${post.type.toLowerCase()} by ${post.author}, from ${post.field}. ${post.title}. ${post.summary}. ${post.likes ?? 0} likes and ${post.comments ?? 0} comments. Posted ${post.time ?? 'recently'}.`
    );
    currentIndexRef.current = 0;
  }, []);

  const speakCurrentInQueue = useCallback(() => {
    const queue = queueRef.current;
    const idx = currentIndexRef.current;
    if (idx < queue.length) {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const text = `Post ${idx + 1} of ${queue.length}. ${queue[idx]}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;
      utterance.lang = lang;
      utterance.onstart = () => { setIsSpeaking(true); setIsPaused(false); };
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      utterance.onerror = () => { setIsSpeaking(false); setIsPaused(false); };
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }, [rate, pitch, volume, lang]);

  const playQueue = useCallback(() => {
    currentIndexRef.current = 0;
    speakCurrentInQueue();
  }, [speakCurrentInQueue]);

  const nextInQueue = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (currentIndexRef.current < queueRef.current.length - 1) {
      currentIndexRef.current += 1;
      speakCurrentInQueue();
    }
  }, [speakCurrentInQueue]);

  const prevInQueue = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (currentIndexRef.current > 0) {
      currentIndexRef.current -= 1;
      speakCurrentInQueue();
    }
  }, [speakCurrentInQueue]);

  const pause = useCallback(() => {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  const getCurrentIndex = useCallback(() => currentIndexRef.current, []);
  const getQueueLength = useCallback(() => queueRef.current.length, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  return {
    isSpeaking,
    isPaused,
    isEnabled,
    toggleEnabled,
    speak,
    speakFeedItem,
    loadQueue,
    playQueue,
    nextInQueue,
    prevInQueue,
    speakCurrentInQueue,
    pause,
    resume,
    stop,
    getCurrentIndex,
    getQueueLength,
  };
}
