"use client";
import React, { useState, useEffect } from 'react';
import { User, Accessibility, Monitor, Moon, Sun, CheckCircle, Volume2, Mic } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useScreenReader } from '../hooks/useScreenReader';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<'accessibility' | 'profile'>('accessibility');
  const { theme, setTheme } = useTheme();
  const [isDyslexic, setIsDyslexic] = useState(false);
  const sr = useScreenReader();
  const [voiceAssistantEnabled, setVoiceAssistantEnabled] = useState(false);

  useEffect(() => {
    setVoiceAssistantEnabled(localStorage.getItem('resona-voice-assistant') === 'true');
  }, []);

  useEffect(() => {
    setIsDyslexic(document.body.classList.contains('font-dyslexic') || localStorage.getItem('dyslexic-font') === 'true');
  }, []);

  const handleDyslexicToggle = () => {
    const newVal = !isDyslexic;
    setIsDyslexic(newVal);
    if (newVal) {
      document.body.classList.add('font-dyslexic');
      localStorage.setItem('dyslexic-font', 'true');
    } else {
      document.body.classList.remove('font-dyslexic');
      localStorage.setItem('dyslexic-font', 'false');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Sidebar - Settings Nav */}
      <aside className="lg:col-span-2 space-y-6 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
        <h2 className="font-bold font-serif text-lg tracking-tight text-text-primary">Settings</h2>
        <nav className="flex flex-col gap-1">
          <button 
            onClick={() => setActiveTab('accessibility')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all relative overflow-hidden ${
              activeTab === 'accessibility' ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'
            }`}
          >
            {activeTab === 'accessibility' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
            <Accessibility className="w-4 h-4 text-primary" />
            Accessibility
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all relative overflow-hidden ${
              activeTab === 'profile' ? 'bg-surface-alt text-text-primary font-bold' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary font-semibold'
            }`}
          >
            {activeTab === 'profile' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
            <User className="w-4 h-4 text-primary" />
            Profile
          </button>
        </nav>
      </aside>

      {/* Main Content Panel */}
      <main className="lg:col-span-7 animate-in fade-in duration-700">
        {activeTab === 'accessibility' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <h1 className="text-3xl font-black font-serif tracking-tight text-text-primary mb-2">Accessibility & Appearance</h1>
              <p className="text-sm text-text-secondary font-semibold tracking-wide">Customize your visual preferences and accessibility options.</p>
            </div>
            
            <div className="space-y-8">
              {/* Theme Selection */}
              <section className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-4">Theme Preference</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'light', label: 'Light Mode', icon: <Sun className="w-6 h-6 mb-3" /> },
                    { id: 'dark', label: 'Dark Mode', icon: <Moon className="w-6 h-6 mb-3" /> },
                    { id: 'system', label: 'System', icon: <Monitor className="w-6 h-6 mb-3" /> },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id as any)}
                      className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${theme === t.id ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-surface hover:border-text-secondary text-text-secondary hover:text-text-primary'}`}
                    >
                      {t.icon}
                      <span className="font-bold text-sm">{t.label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Dyslexic Toggle */}
              <section className="bg-surface border border-border rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm mb-1 text-text-primary">Dyslexic-Friendly Font</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">Switches the global font to OpenDyslexic with adjusted line-height and spacing.</p>
                </div>
                <button 
                  onClick={handleDyslexicToggle}
                  className={`w-14 h-7 rounded-full relative transition-colors shrink-0 ml-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isDyslexic ? 'bg-primary' : 'bg-border'}`}
                  title="Toggle Dyslexic Font"
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-background transition-transform duration-300 shadow-sm ${isDyslexic ? 'translate-x-7' : 'translate-x-0'}`} />
                </button>
              </section>

              {/* Screen Reader Toggle */}
              <section className="bg-surface border border-border rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Volume2 className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-sm text-text-primary">Screen Reader</h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">Enables audio narration of feed posts using your browser's text-to-speech engine. A floating control bar will appear on the Home Feed with play, pause, and skip controls.</p>
                </div>
                <button 
                  onClick={() => {
                    sr.toggleEnabled();
                    if (!sr.isEnabled) {
                      // Will be enabled after toggle — announce it
                      setTimeout(() => {
                        const u = new SpeechSynthesisUtterance('Screen reader enabled. Navigate to your Home Feed to begin listening.');
                        u.rate = 0.95;
                        u.pitch = 1.05;
                        window.speechSynthesis?.speak(u);
                      }, 100);
                    }
                  }}
                  className={`w-14 h-7 rounded-full relative transition-colors shrink-0 ml-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${sr.isEnabled ? 'bg-primary' : 'bg-border'}`}
                  title="Toggle Screen Reader"
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-background transition-transform duration-300 shadow-sm ${sr.isEnabled ? 'translate-x-7' : 'translate-x-0'}`} />
                </button>
              </section>

              {/* Voice Assistant Toggle */}
              <section className="bg-surface border border-border rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Mic className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-sm text-text-primary">Voice Assistant</h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">Shows a floating microphone button on every page. Tap it to open the Resona Voice assistant panel for hands-free navigation and commands.</p>
                </div>
                <button 
                  onClick={() => {
                    const next = !voiceAssistantEnabled;
                    setVoiceAssistantEnabled(next);
                    localStorage.setItem('resona-voice-assistant', String(next));
                    // Dispatch custom event so Layout picks it up immediately
                    window.dispatchEvent(new Event('resona-voice-toggle'));
                  }}
                  className={`w-14 h-7 rounded-full relative transition-colors shrink-0 ml-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${voiceAssistantEnabled ? 'bg-primary' : 'bg-border'}`}
                  title="Toggle Voice Assistant"
                >
                  <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-background transition-transform duration-300 shadow-sm ${voiceAssistantEnabled ? 'translate-x-7' : 'translate-x-0'}`} />
                </button>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <h1 className="text-3xl font-black font-serif tracking-tight text-text-primary mb-2">Profile Details</h1>
              <p className="text-sm text-text-secondary font-semibold tracking-wide">Manage your public-facing academic identity.</p>
            </div>
            
            <div className="space-y-6">
              {/* Avatar Upload */}
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-border bg-surface-alt shadow-sm shrink-0">
                  <img src="/avatar_aris.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <button className="btn-outline mb-2">Upload New Avatar</button>
                  <p className="text-xs text-text-secondary">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-text-secondary mb-2">Display Name</label>
                  <input type="text" defaultValue="Dr. Ahmed Raza" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-text-secondary mb-2">Bio</label>
                  <textarea rows={4} defaultValue="Professor of Quantum Physics specializing in advanced entanglement structures." className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-text-secondary mb-2">ORCID iD</label>
                  <div className="flex items-center gap-3">
                    <input type="text" disabled defaultValue="0000-0002-1825-0097" className="flex-1 bg-surface-alt border border-border rounded-lg px-4 py-3 text-sm text-text-secondary" />
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 text-xs font-bold shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Connected
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Right Sidebar - Empty placeholder for grid consistency */}
      <aside className="lg:col-span-3 sticky top-28 self-start">
        {/* Reserved for future settings widgets */}
      </aside>
    </div>
  );
}
