"use client";
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Search,
  X
} from 'lucide-react';

interface OnboardingWizardProps {
  onComplete: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
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
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-secondary/5 -z-10" />
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-2 ${
              s <= currentStep ? 'bg-primary border-primary text-white scale-110' : 'bg-white border-secondary/10 text-secondary/40'
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
                <h1 className="text-4xl md:text-5xl font-black font-serif">Welcome to the Resona circle.</h1>
                <p className="text-lg text-secondary/60 leading-relaxed">
                  You're just a few parameters away from a tailored academic collaboration environment. 
                  Let's define your research focus to get started.
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h2 className="text-3xl font-black font-serif uppercase tracking-tight">Define Your Research Focus</h2>
                <p className="text-secondary/60">Architectural precision begins with clear parameters.</p>
                
                <div className="space-y-4 pt-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Thematic Tags</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/30" />
                    <input 
                      type="text" 
                      placeholder="Search areas of interest..." 
                      className="w-full bg-secondary/5 border-2 border-transparent rounded-2xl pl-12 pr-4 py-4 focus:bg-white focus:border-primary/20 outline-none transition-all font-semibold"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition-all ${
                          formData.tags.includes(tag) 
                            ? 'bg-primary border-primary text-white' 
                            : 'bg-white border-secondary/5 text-secondary/60 hover:border-primary/30'
                        }`}
                      >
                        {tag} {formData.tags.includes(tag) && <X className="w-3 h-3 inline ml-1" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h2 className="text-3xl font-black font-serif uppercase tracking-tight">Academic Level</h2>
                <p className="text-secondary/60">Help us match you with peers and mentors at the right stage.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {academicLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setFormData({ ...formData, level: level.id })}
                      className={`p-6 rounded-3xl border-2 text-left transition-all ${
                        formData.level === level.id 
                          ? 'bg-primary/5 border-primary shadow-lg shadow-primary/10' 
                          : 'bg-white border-secondary/5 hover:border-primary/20'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${formData.level === level.id ? 'bg-primary text-white' : 'bg-secondary/5 text-secondary/40'}`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold">{level.label}</h4>
                      <p className="text-xs text-secondary/40">{level.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <h2 className="text-3xl font-black font-serif uppercase tracking-tight">Collaboration Preferences</h2>
                <p className="text-secondary/60">How do you prefer to interact with the community?</p>
                
                <div className="space-y-4 pt-4">
                  {modalities.map(m => (
                    <label 
                      key={m.id}
                      className={`flex items-center gap-4 p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                        formData.modalities.includes(m.id) 
                          ? 'bg-primary/5 border-primary' 
                          : 'bg-white border-secondary/5 hover:border-primary/20'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={formData.modalities.includes(m.id)}
                        onChange={() => setFormData({
                          ...formData,
                          modalities: formData.modalities.includes(m.id) 
                            ? formData.modalities.filter(id => id !== m.id) 
                            : [...formData.modalities, m.id]
                        })}
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.modalities.includes(m.id) ? 'bg-primary border-primary text-white' : 'border-secondary/10'}`}>
                        {formData.modalities.includes(m.id) && <Check className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="font-bold">{m.title}</h4>
                        <p className="text-xs text-secondary/40">{m.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h1 className="text-4xl font-black font-serif">Magic is happening.</h1>
                <p className="text-lg text-secondary/60 leading-relaxed">
                  Your personalized research environment is being architected right now. 
                  Get ready for intelligent matching and seamless collaboration.
                </p>
                
                <div className="p-8 rounded-3xl bg-secondary/5 border-2 border-secondary/5 space-y-4 overflow-hidden relative grayscale">
                   <div className="h-4 w-3/4 bg-secondary/10 rounded-full animate-pulse" />
                   <div className="h-4 w-1/2 bg-secondary/10 rounded-full animate-pulse" />
                   <div className="grid grid-cols-3 gap-2 pt-4">
                     <div className="h-10 bg-secondary/10 rounded-xl animate-pulse" />
                     <div className="h-10 bg-secondary/10 rounded-xl animate-pulse" />
                     <div className="h-10 bg-secondary/10 rounded-xl animate-pulse" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
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
            <button 
              onClick={currentStep === 5 ? onComplete : nextStep}
              className="btn-primary flex items-center gap-2"
            >
              {currentStep === 5 ? 'Enter Resona' : 'Proceed'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preview Side (only for steps 2-4) */}
        <div className="hidden lg:block w-[400px] bg-secondary/5 border-l border-secondary/5 p-12 overflow-hidden relative">
           <div className="space-y-8 animate-in fade-in duration-1000">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/30">Live Configuration Preview</h4>
             
             <div className="card-premium scale-90 -translate-x-4">
                <div className="aspect-video bg-muted rounded-2xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Preview" className="w-full h-full object-cover opacity-50 grayscale" />
                </div>
                <div className="h-3 w-1/2 bg-secondary/5 rounded-full mb-2" />
                <div className="h-3 w-3/4 bg-secondary/5 rounded-full" />
                
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {formData.tags.map(t => (
                    <div key={t} className="px-3 py-1 rounded-full bg-primary/10 text-[8px] font-black text-primary uppercase tracking-wider">{t}</div>
                  ))}
                  {formData.tags.length === 0 && <div className="h-6 w-20 bg-secondary/5 rounded" />}
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
