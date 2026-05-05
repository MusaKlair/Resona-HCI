"use client";
import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Search,
  X,
  Handshake,
  FileText,
  Lightbulb
} from 'lucide-react';

interface OnboardingWizardProps {
  onComplete: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    if (currentStep === 5) {
      setIsProcessing(true);
      const timer = setTimeout(() => setIsProcessing(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    tags: [] as string[],
    level: '',
    modalities: [] as string[],
  });

  const totalSteps = 5;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const availableTags = ['Quantum Computing', 'NLP', 'Bio-informatics', 'Urban Planning', 'Sustainability', 'Robotics', 'Ethical AI'];
  
  const toggleTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag) 
        : [...prev.tags, tag]
    }));
  };

  const academicLevels = [
    { id: 'undergrad', label: 'Undergrad', sub: 'Bachelor candidates' },
    { id: 'postgrad', label: 'Postgrad', sub: 'Masters / PhD' },
    { id: 'faculty', label: 'Faculty', sub: 'Professors / Researchers' },
    { id: 'industry', label: 'Industry', sub: 'Private Sector' },
  ];

  const modalities = [
    { id: 'mentor', title: 'Seeking Mentorship', desc: 'Find guidance from experienced seniors' },
    { id: 'coauthor', title: 'Co-authoring', desc: 'Collaborate on active publications' },
    { id: 'openproblem', title: 'Open Problem Solving', desc: 'Join groups solving core issues' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-16 relative">
        {/* Background Track */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-secondary/5 -z-10 rounded-full" />
        {/* Highlighted Track */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-2 ${
              s <= currentStep ? 'bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20' : 'bg-white border-secondary/10 text-secondary/40'
            }`}
          >
            {s < currentStep ? <Check className="w-5 h-5" /> : s}
          </div>
        ))}
      </div>

      <div className="card-premium p-0 overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-in slide-in-from-bottom-8 duration-700">
        {/* Content Side */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-between">
          <div className="space-y-8">
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-serif text-secondary tracking-tight">Welcome to the Resona Circle</h1>
                <p className="text-lg text-secondary/60 leading-relaxed">
                  You're just a few parameters away from a tailored academic collaboration environment. 
                  Let's define your research focus to get started.
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h1 className="text-4xl font-black font-serif text-secondary tracking-tight">Define your research focus</h1>
                <p className="text-secondary/60">Architectural precision begins with clear parameters.</p>
                
                <div className="space-y-4 pt-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Thematic Tags</label>
                  <div className="relative shadow-sm rounded-2xl group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40 transition-colors group-focus-within:text-secondary" />
                    <input 
                      type="text" 
                      placeholder="Search areas of interest..." 
                      className="w-full bg-white border border-secondary/10 rounded-2xl pl-12 pr-4 py-4 focus:border-secondary/20 focus:ring-4 focus:ring-secondary/5 outline-none transition-all font-semibold text-secondary placeholder:text-secondary/40"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {availableTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 flex items-center gap-1.5 ${
                          formData.tags.includes(tag) 
                            ? 'bg-secondary border-secondary text-white shadow-md scale-105' 
                            : 'bg-white border-secondary/10 text-secondary/60 hover:bg-[#F3F4F6] hover:text-secondary hover:border-secondary/20'
                        }`}
                      >
                        {tag} {formData.tags.includes(tag) && <X className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h1 className="text-4xl font-black font-serif text-secondary tracking-tight">Select your academic level</h1>
                <p className="text-secondary/60">Help us match you with peers and mentors at the right stage.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {academicLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setFormData({ ...formData, level: level.id })}
                      className={`relative p-6 rounded-3xl border-2 text-left transition-all duration-300 ${
                        formData.level === level.id 
                          ? 'bg-secondary/5 border-secondary shadow-md scale-[1.02]' 
                          : 'bg-white border-secondary/10 hover:border-secondary/30 hover:bg-[#F3F4F6]'
                      }`}
                    >
                      {formData.level === level.id && (
                        <div className="absolute top-4 right-4 text-secondary">
                          <Check className="w-5 h-5" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-colors ${formData.level === level.id ? 'bg-secondary text-white' : 'bg-secondary/5 text-secondary/40'}`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-secondary">{level.label}</h4>
                      <p className="text-xs text-secondary/60">{level.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h1 className="text-4xl font-black font-serif text-secondary tracking-tight">Choose collaboration preferences</h1>
                <p className="text-secondary/60">How do you prefer to interact with the community?</p>
                
                <div className="space-y-4 pt-4">
                  {modalities.map(m => {
                    const isSelected = formData.modalities.includes(m.id);
                    const Icon = m.id === 'mentor' ? Handshake : m.id === 'coauthor' ? FileText : Lightbulb;
                    
                    return (
                      <label 
                        key={m.id}
                        className={`flex items-center gap-5 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'bg-secondary/5 border-secondary shadow-md scale-[1.01]' 
                            : 'bg-white border-secondary/10 hover:border-secondary/30 hover:bg-[#F3F4F6]'
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          className="hidden"
                          checked={isSelected}
                          onChange={() => setFormData({
                            ...formData,
                            modalities: isSelected 
                              ? formData.modalities.filter(id => id !== m.id) 
                              : [...formData.modalities, m.id]
                          })}
                        />
                        <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors ${isSelected ? 'bg-secondary text-white' : 'bg-secondary/5 text-secondary/40'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-secondary">{m.title}</h4>
                          <p className="text-sm text-secondary/60">{m.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="text-secondary shrink-0">
                            <Check className="w-6 h-6" />
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Sparkles className={`w-8 h-8 ${isProcessing ? 'animate-pulse' : ''}`} />
                </div>
                <h1 className="text-4xl font-black font-serif text-secondary tracking-tight">Architecting your workspace</h1>
                <p className="text-lg text-secondary/60 leading-relaxed">
                  {isProcessing ? 'Aligning your focus with 14,000+ active research vectors...' : 'Configuration complete. Your Match Hub is ready.'}
                </p>
                
                {/* Match Hub Card Skeleton */}
                <div className={`p-6 rounded-3xl border border-secondary/10 shadow-sm transition-all duration-1000 ${isProcessing ? 'bg-secondary/5' : 'bg-white'}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full ${isProcessing ? 'bg-secondary/10 animate-pulse' : 'bg-primary/20'}`} />
                    <div className="space-y-2 flex-1 pt-1">
                      <div className={`h-4 w-1/3 rounded-full ${isProcessing ? 'bg-secondary/10 animate-pulse' : 'bg-secondary/20'}`} />
                      <div className={`h-3 w-1/4 rounded-full ${isProcessing ? 'bg-secondary/5 animate-pulse' : 'bg-secondary/10'}`} />
                    </div>
                    {/* Structural Alignment Box Skeleton */}
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${isProcessing ? 'bg-secondary/10 animate-pulse' : 'bg-primary/5 border border-primary/20'}`}>
                       {!isProcessing && <div className="text-xs font-black text-primary">98%</div>}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className={`h-2 w-full rounded-full ${isProcessing ? 'bg-secondary/5 animate-pulse' : 'bg-secondary/10'}`} />
                    <div className={`h-2 w-5/6 rounded-full ${isProcessing ? 'bg-secondary/5 animate-pulse' : 'bg-secondary/10'}`} />
                  </div>

                  {/* Primary Connect Button Skeleton */}
                  <div className={`h-12 w-full rounded-xl ${isProcessing ? 'bg-secondary/10 animate-pulse' : 'bg-secondary'} transition-colors duration-1000 flex items-center justify-center`}>
                     {!isProcessing && <span className="text-white text-xs font-bold tracking-widest uppercase">Connect</span>}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-12">
            <button 
              onClick={prevStep}
              className={`flex items-center gap-2 font-bold text-secondary/40 hover:text-secondary transition-colors ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            {currentStep === 5 ? (
              <button 
                onClick={onComplete}
                disabled={isProcessing}
                className={`font-bold px-8 py-3.5 rounded-md transition-all flex items-center gap-2 text-sm shadow-lg ${
                  isProcessing 
                    ? 'bg-secondary/10 text-secondary/40 cursor-not-allowed opacity-0 translate-y-4' 
                    : 'bg-primary text-white hover:bg-primary/90 shadow-primary/30 opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-4 duration-700'
                }`}
              >
                Enter Resona
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={nextStep}
                className="bg-primary text-white font-bold px-8 py-3.5 rounded-md hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 text-sm"
              >
                Proceed
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Preview Side (only for steps 2-4) */}
        <div className="hidden lg:block w-[400px] bg-secondary/5 border-l border-secondary/5 p-12 overflow-hidden relative">
           <div className="space-y-8 animate-in fade-in duration-1000">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/30">Live Configuration Preview</h4>
             
             <div className="card-premium scale-90 -translate-x-4 border border-secondary/10 shadow-elevated bg-white">
                {/* Simplified Match Hub Header */}
                <div className="flex items-center gap-2 border-b border-secondary/5 pb-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center">
                    <Search className="w-4 h-4 text-secondary/30" />
                  </div>
                  <div className="h-4 w-32 bg-secondary/5 rounded-md" />
                </div>
                
                {/* Dynamic Content Area */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 bg-secondary/10 rounded-full" />
                    {formData.level && (
                      <div className="px-2 py-0.5 rounded bg-secondary text-[8px] font-bold text-white uppercase tracking-widest">
                        {academicLevels.find(l => l.id === formData.level)?.label}
                      </div>
                    )}
                  </div>
                  
                  <div className="h-2 w-full bg-secondary/5 rounded-full" />
                  <div className="h-2 w-3/4 bg-secondary/5 rounded-full" />
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {formData.tags.map(t => (
                      <div key={t} className="px-3 py-1.5 rounded-full bg-primary/10 text-[9px] font-black text-primary tracking-wider">{t}</div>
                    ))}
                    {formData.tags.length === 0 && <div className="h-6 w-24 bg-secondary/5 rounded-full" />}
                  </div>

                  {formData.modalities.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-secondary/5 space-y-2">
                      <div className="text-[8px] font-black uppercase text-secondary/30 tracking-widest">Seeking</div>
                      <div className="flex flex-wrap gap-1">
                        {formData.modalities.map(m => (
                          <div key={m} className="px-2 py-1 bg-secondary/5 text-secondary text-[8px] font-bold rounded">
                            {modalities.find(mod => mod.id === m)?.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
             </div>

             <div className="card-premium scale-90 translate-x-4 bg-secondary text-white border-none">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-white/20 rounded-full" />
                    <div className="h-2 w-12 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-24 w-full bg-white/5 rounded-2xl" />
             </div>
           </div>
           
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
