"use client";
import React, { useState, useEffect } from 'react';
import { UploadCloud, FileText, X } from 'lucide-react';

const UploadWizard: React.FC = () => {
  const [isExtracting, setIsExtracting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibility, setVisibility] = useState('Public');
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    year: '',
    doi: ''
  });

  // Simulate file drop and metadata extraction
  const handleDrop = () => {
    setIsExtracting(true);
    setProgress(0);
  };

  useEffect(() => {
    if (isExtracting && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => Math.min(p + 15, 100));
      }, 400);
      return () => clearTimeout(timer);
    } else if (isExtracting && progress >= 100) {
      setFormData({
        title: 'Synthesis of Novel Carbon Nanotube Arrays',
        abstract: 'We present a reproducible method for synthesizing highly ordered carbon nanotube arrays, demonstrating a 40% increase in specific capacitance...',
        year: '2024',
        doi: '10.1038/s41586-024-0000-0'
      });
      setIsExtracting(false);
    }
  }, [isExtracting, progress]);

  return (
    <div className="max-w-[1200px] mx-auto min-h-[calc(100vh-100px)] flex flex-col bg-white animate-in fade-in duration-500">
      
      <header className="p-8 md:px-12 border-b border-secondary/10">
        <h1 className="text-3xl font-black font-serif tracking-tight">Upload Research Content</h1>
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 bg-secondary/[0.02]">
        
        {/* Left Side - Dropzone */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-r border-secondary/10">
          
          <div 
            onClick={handleDrop}
            className="w-full aspect-[4/3] border-2 border-dashed border-[#E5E7EB] bg-[#F8FAFC] hover:bg-secondary/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-8 mb-8 shadow-sm rounded-3xl group"
          >
            <div className="w-14 h-14 border border-secondary/10 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform">
              <UploadCloud className="w-7 h-7 text-secondary/40" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-sans text-secondary">Drag & Drop PDF Here</h3>
            <p className="text-xs text-secondary/40 font-semibold mb-6">Max file size: 50MB</p>
            <button className="px-6 py-3 border-2 border-secondary text-secondary text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-secondary hover:text-white transition-all active:scale-95">
              Browse Files
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-[#F9FAFB] px-4 text-secondary/30">or</span>
            </div>
          </div>

          {/* DOI Input */}
          <div className="space-y-3 mb-10">
              <label className="text-[10px] font-black uppercase tracking-widest text-secondary/40 ml-1">Import via DOI</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="e.g. 10.1038/s41586-024-0000-0"
                  className="flex-1 bg-white border border-secondary/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-secondary/30 transition-all shadow-sm font-semibold text-secondary"
                />
                <button 
                  onClick={handleDrop}
                  className="bg-secondary text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary/90 active:scale-95 transition-all shadow-lg shadow-secondary/20 whitespace-nowrap"
                >
                  Auto-Fill
                </button>
              </div>
          </div>

          {/* Extraction Progress */}
          {(isExtracting || progress === 100) && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary/70">
                  {progress < 100 ? 'Extracting Metadata...' : 'Extraction Complete'}
                </span>
                <span className="text-[10px] font-black">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-secondary/10 overflow-hidden rounded-full">
                <div 
                  className="h-full bg-primary transition-all duration-300 ease-out" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-16 bg-secondary/[0.03]">
          <h2 className="text-2xl font-black font-sans text-secondary mb-8">Publication Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Title</label>
              <input 
                type="text" 
                placeholder="Enter research title"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-secondary/30 transition-all shadow-sm rounded-xl font-semibold text-secondary"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Author List</label>
              <div className="w-full p-4 bg-white border border-secondary/10 flex flex-wrap gap-2 items-center shadow-sm rounded-xl">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/5 border border-secondary/5 rounded-full text-[10px] font-bold text-secondary tracking-wider">
                  Dr. Aris Thorne <X className="w-3 h-3 cursor-pointer opacity-40 hover:opacity-100" />
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/5 border border-secondary/5 rounded-full text-[10px] font-bold text-secondary tracking-wider">
                  Jane Doe <X className="w-3 h-3 cursor-pointer opacity-40 hover:opacity-100" />
                </span>
                <input 
                  type="text" 
                  placeholder="Add author..."
                  className="flex-1 min-w-[120px] text-sm bg-transparent outline-none p-1 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Abstract (Max 300 words)</label>
              <textarea 
                rows={5}
                value={formData.abstract}
                onChange={e => setFormData({...formData, abstract: e.target.value})}
                className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-secondary/30 transition-all shadow-sm resize-none rounded-xl font-medium text-secondary leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Research Tags & Disciplines</label>
              <div className="w-full p-4 bg-white border border-secondary/10 flex flex-wrap gap-2 items-center shadow-sm rounded-xl">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/5 border border-secondary/5 rounded-full text-[10px] font-bold text-secondary tracking-wider">
                  Machine Learning <X className="w-3 h-3 cursor-pointer opacity-40 hover:opacity-100" />
                </span>
                <input 
                  type="text" 
                  placeholder="e.g., Quantum Computing, Neural Mapping..."
                  className="flex-1 min-w-[200px] text-sm bg-transparent outline-none p-1 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Year</label>
                <input 
                  type="text" 
                  placeholder="YYYY"
                  value={formData.year}
                  onChange={e => setFormData({...formData, year: e.target.value})}
                  className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-secondary/30 transition-all shadow-sm rounded-xl font-semibold text-secondary"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">DOI</label>
                <input 
                  type="text" 
                  placeholder="10.xxxx/xxxx"
                  value={formData.doi}
                  onChange={e => setFormData({...formData, doi: e.target.value})}
                  className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-secondary/30 transition-all shadow-sm rounded-xl font-semibold text-secondary"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-2">Visibility Setting</label>
              <div className="flex bg-white p-1 rounded-xl border border-secondary/10 shadow-sm max-w-sm">
                {['Public', 'Verified', 'Private'].map((option) => (
                  <button
                    key={option}
                    onClick={(e) => { e.preventDefault(); setVisibility(option); }}
                    className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                      visibility === option 
                        ? 'bg-secondary text-white shadow-md' 
                        : 'text-secondary/40 hover:text-secondary'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 px-12 border-t border-secondary/10 bg-white flex justify-end items-center gap-6">
        <button className="px-5 py-2.5 text-sm font-bold text-secondary/40 hover:text-secondary hover:bg-secondary/5 rounded-xl transition-all">
          Cancel
        </button>
        <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20">
          Publish to Profile
          <FileText className="w-4 h-4" />
        </button>
      </footer>

    </div>
  );
};

export default UploadWizard;
