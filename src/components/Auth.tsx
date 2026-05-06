"use client";
import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, ArrowRight, RefreshCw, Lock } from 'lucide-react';

interface AuthProps {
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to ensure the scroll happens after the step-related DOM update
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [step]);

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
    if (email.includes('@') && (email.toLowerCase().endsWith('.edu') || email.includes('inst'))) {
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

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    // Autoverify if all digits are filled
    if (newOtp.every(val => val !== '')) {
      onSuccess();
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
    <div className="min-h-[90vh] flex items-center justify-center p-6 bg-surface">
      <div className="max-w-md w-full space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center space-y-4 flex flex-col items-center">
          {step === 'otp' && (
            <div className="w-16 h-16 bg-surface-alt border border-border rounded-2xl flex items-center justify-center text-text-secondary mb-2">
              <Mail className="w-8 h-8" />
            </div>
          )}
          <h1 className="text-4xl font-black font-serif text-text-primary tracking-tight">
            {step === 'otp' ? 'Check your email' : (mode === 'login' ? 'Welcome back' : 'Create your Resona account')}
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed max-w-[280px] mx-auto">
            {step === 'otp' 
              ? `We've sent a 6-digit code to ${email}` 
              : mode === 'login'
                ? 'Enter your credentials to access your workspace and match hub.'
                : 'Join the modern academic operating system to discover open problems and secure funding.'}
          </p>
        </div>

        {step === 'email' ? (
          <div className="space-y-8">
            {/* SSO Options */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-border rounded-xl font-bold text-sm text-text-primary hover:bg-surface-alt transition-all">
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" className="w-5 h-5" alt="ORCID" />
                Continue with ORCID
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-border rounded-xl font-bold text-sm text-text-primary hover:bg-surface-alt transition-all">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-border rounded-xl font-bold text-sm text-text-primary hover:bg-surface-alt transition-all">
                <ShieldCheck className="w-5 h-5 text-text-secondary" />
                Continue with Institution
              </button>
            </div>

            {/* OR Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-surface px-4 text-text-secondary">or</span>
              </div>
            </div>

            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="auth-email" className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">
                  Institutional Email Address
                </label>
                <div className="relative group">
                  <input
                    id="auth-email"
                    type="email"
                    required
                    placeholder="name@university.edu"
                    aria-describedby="email-help"
                    className="w-full bg-surface-alt border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:border-primary/30 focus:bg-surface transition-all text-text-primary font-bold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                {mode === 'login' ? 'Send Login Code' : 'Continue with Email'}
              </button>
            </form>

            <div className="text-center pt-4">
              <button 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
              >
                {mode === 'login' ? "New to Resona? Create an account" : "Already have an account? Log in"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                Enter 6-Digit Code
              </label>
            </div>
            
            <div className="flex justify-between gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Digit ${i + 1} of 6`}
                  className="w-14 h-14 bg-surface border border-border rounded-xl text-center text-2xl font-semibold text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                />
              ))}
            </div>

            <div className="text-center">
              <span className="text-[11px] font-bold text-text-secondary">
                {timer > 0 ? `Resend code in ${formatTime(timer)}` : (
                  <button 
                    onClick={() => { setTimer(59); setIsResending(true); setTimeout(() => setIsResending(false), 1000); }}
                    className="flex items-center justify-center gap-1.5 mx-auto hover:text-text-primary transition-colors"
                  >
                    <RefreshCw className={`w-3 h-3 ${isResending ? 'animate-spin' : ''}`} />
                    Resend Code
                  </button>
                )}
              </span>
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.some(d => d === '')}
              className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              <Lock className="w-4 h-4" />
              Verify & Continue
            </button>

            <button 
              onClick={() => setStep('email')}
              className="w-full text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
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
