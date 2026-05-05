"use client";
import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, ArrowRight, RefreshCw, Lock } from 'lucide-react';

interface AuthProps {
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@') && email.toLowerCase().endsWith('.edu') || email.includes('inst')) {
      setStep('otp');
      setTimer(59);
    } else {
      alert('Please enter a valid institutional email address (e.g., name@university.edu)');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.every(val => val !== '')) {
      onSuccess();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full card-premium p-10 space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            {step === 'email' ? <Mail className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black font-serif uppercase tracking-tight">
              {step === 'email' ? 'Sign In / Register' : 'Verify Identity'}
            </h2>
            <p className="text-secondary/60 text-sm font-medium">
              {step === 'email' 
                ? 'Enter your institutional credentials to access the research portal' 
                : `We've sent a 6-digit code to ${email}`}
            </p>
          </div>
        </div>

        {step === 'email' ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 ml-1">
                Institutional Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  className="w-full bg-secondary/5 border-2 border-secondary/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/30 focus:bg-white transition-all text-secondary font-semibold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-md font-bold text-xs hover:bg-primary/90 transition-colors uppercase tracking-widest"
                >
                  Send OTP
                </button>
              </div>
            </div>
            
            <div className="pt-4 text-center">
              <p className="text-[10px] text-secondary/30 font-bold uppercase tracking-tighter">
                Why Institutional Email? <span className="text-primary/60 cursor-pointer hover:text-primary">Learn more</span>
              </p>
            </div>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">
                Enter OTP
              </label>
              <span className="text-[10px] font-bold text-primary uppercase">
                {timer > 0 ? `Resend in ${formatTime(timer)}` : (
                  <button 
                    onClick={() => { setTimer(59); setIsResending(true); setTimeout(() => setIsResending(false), 1000); }}
                    className="flex items-center gap-1 hover:underline"
                  >
                    <RefreshCw className={`w-3 h-3 ${isResending ? 'animate-spin' : ''}`} />
                    Resend Code
                  </button>
                )}
              </span>
            </div>
            
            <div className="flex justify-between gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  className="w-12 h-16 bg-secondary/5 border-2 border-secondary/5 rounded-xl text-center text-2xl font-black focus:border-primary/30 focus:bg-white outline-none transition-all"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.some(d => d === '')}
              className="w-full btn-primary py-4 rounded-md flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale disabled:scale-100"
            >
              <Lock className="w-5 h-5" />
              Verify & Continue
            </button>

            <button 
              onClick={() => setStep('email')}
              className="w-full text-[10px] font-bold uppercase tracking-widest text-secondary/40 hover:text-secondary transition-colors"
            >
              Back to Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
