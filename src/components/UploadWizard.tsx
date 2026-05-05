"use client";
import React, { useState, useEffect } from 'react';
import { UploadCloud, FileText, X } from 'lucide-react';

const UploadWizard: React.FC = () => {
  const [isExtracting, setIsExtracting] = useState(false);
  const [progress, setProgress] = useState(0);
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
            className="w-full aspect-[4/3] border-2 border-dashed border-secondary/20 bg-white hover:bg-secondary/5 transition-colors cursor-pointer flex flex-col items-center justify-center text-center p-8 mb-12 shadow-sm"
          >
            <div className="w-12 h-12 border border-secondary/20 rounded flex items-center justify-center mb-4 bg-secondary/5">
              <UploadCloud className="w-6 h-6 text-secondary/60" />
            </div>
            <h3 className="text-lg font-bold mb-2">Drag & Drop PDF Here</h3>
            <p className="text-xs text-secondary/50 font-semibold">Max file size: 50MB</p>
            <button className="mt-6 px-6 py-2.5 bg-secondary/10 text-secondary text-xs font-bold rounded-md hover:bg-secondary/20 transition-colors">
              Browse Files
            </button>
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
              <div className="w-full h-2 bg-secondary/10 overflow-hidden">
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
          <h2 className="text-xl font-bold font-serif mb-8">Publication Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Title</label>
              <input 
                type="text" 
                placeholder="Enter research title"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-primary/50 transition-colors shadow-sm rounded-md"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Author List</label>
              <div className="w-full p-3 bg-white border border-secondary/10 flex flex-wrap gap-2 items-center shadow-sm rounded-md">
                <span className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-secondary/70 tracking-wider">
                  Dr. Aris Thorne <X className="w-3 h-3 cursor-pointer" />
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-secondary/70 tracking-wider">
                  Jane Doe <X className="w-3 h-3 cursor-pointer" />
                </span>
                <input 
                  type="text" 
                  placeholder="Add author..."
                  className="flex-1 min-w-[100px] text-sm bg-transparent outline-none p-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Abstract (Max 300 words)</label>
              <textarea 
                rows={5}
                value={formData.abstract}
                onChange={e => setFormData({...formData, abstract: e.target.value})}
                className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-primary/50 transition-colors shadow-sm resize-none rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">Year</label>
                <input 
                  type="text" 
                  placeholder="YYYY"
                  value={formData.year}
                  onChange={e => setFormData({...formData, year: e.target.value})}
                  className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-primary/50 transition-colors shadow-sm rounded-md"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-2">DOI</label>
                <input 
                  type="text" 
                  placeholder="10.xxxx/xxxx"
                  value={formData.doi}
                  onChange={e => setFormData({...formData, doi: e.target.value})}
                  className="w-full p-4 text-sm bg-white border border-secondary/10 outline-none focus:border-primary/50 transition-colors shadow-sm rounded-md"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="p-6 px-12 border-t border-secondary/10 bg-white flex justify-end items-center gap-8">
        <button className="text-sm font-bold hover:text-primary transition-colors">
          Cancel
        </button>
        <button className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary/90 transition-colors rounded-md shadow-sm">
          Publish to Profile <FileText className="w-4 h-4" />
        </button>
      </footer>

    </div>
  );
};

export default UploadWizard;
