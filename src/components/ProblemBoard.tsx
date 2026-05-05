"use client";
import React from 'react';
import { Search, Bookmark, X } from 'lucide-react';

const mockProblems = [
  {
    id: 1,
    title: 'Optimize CRISPR-Cas9 Delivery Vectors for Neural Tissue',
    desc: 'Seeking expertise in viral vector engineering to improve targeted delivery efficiency in central nervous system models while minimizing off-target immunogenic responses.',
    tags: ['BIOTECH', 'URGENT'],
    skills: 'Virology, Gene Editing',
    commitment: 'Part-time (20h/w)',
    deadline: 'Oct 15, 2024',
    lab: 'NeuroGen Lab',
    compensation: 'Equity + Grant'
  },
  {
    id: 2,
    title: 'Scalable Synthesis of Graphene Aerogels',
    desc: 'Looking for a chemical engineer to design a continuous flow process for synthesizing ultra-low density graphene aerogels for structural applications.',
    tags: ['MATERIALS'],
    skills: 'Chem Eng, Nanotech',
    commitment: 'Contract',
    deadline: 'Nov 01, 2024',
    lab: 'Project Aero',
    compensation: '$15k Bounty'
  },
  {
    id: 3,
    title: 'Federated Learning Protocols for Healthcare Data',
    desc: 'Develop privacy-preserving aggregation algorithms for distributed training across multiple hospital networks without centralizing sensitive patient records.',
    tags: ['COMP SCI', 'AI/ML'],
    skills: 'Cryptography, ML',
    commitment: 'Full-time',
    deadline: 'Dec 10, 2024',
    lab: 'MedTech Consortium',
    compensation: 'Salaried'
  },
  {
    id: 4,
    title: 'Room Temperature Superconductor Verification',
    desc: 'Independent verification team needed to replicate synthesis and measure magnetic susceptibility of newly proposed copper-substituted lead apatite.',
    tags: ['PHYSICS', 'CLOSED'],
    skills: 'Condensed Matter, XRD',
    commitment: 'Project-based',
    deadline: 'Closed',
    lab: 'Quantum Materials Lab',
    compensation: 'Grant Funded',
    closed: true
  }
];

const ProblemBoard: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-background">
      
      {/* Left Filters Sidebar */}
      <aside className="lg:col-span-3 border-r border-secondary/5 bg-secondary/[0.02] p-8 space-y-10">
        <div>
          <h2 className="font-black font-serif text-lg tracking-tight mb-8">Filters</h2>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
              <input 
                type="text" 
                placeholder="Keywords..." 
                className="w-full text-sm pl-10 p-3 rounded-lg border border-secondary/10 bg-white outline-none focus:border-primary/30"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Discipline</h3>
            <div className="flex flex-wrap gap-2">
              {['Computer Science', 'Biotech', 'Materials', 'Physics', 'Data Science'].map(disc => (
                <button 
                  key={disc}
                  className={`px-3 py-1.5 border rounded-full text-xs font-semibold transition-colors ${
                    disc === 'Biotech' 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-secondary/20 hover:border-secondary/50 bg-white text-secondary/70'
                  }`}
                >
                  {disc}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Time Commitment</h3>
            {['Full-time', 'Part-time', 'Contract / Bounty'].map(time => (
              <label key={time} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${time === 'Part-time' ? 'bg-primary border-primary text-white' : 'border-secondary/20 group-hover:border-secondary/50 bg-white'}`}>
                  {time === 'Part-time' && <div className="w-2 h-2 bg-white rounded-sm" />}
                </div>
                <span className="text-sm font-semibold">{time}</span>
              </label>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Compensation</h3>
            {['Equity', 'Grant Funded', 'Salaried'].map(comp => (
              <label key={comp} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${(comp === 'Equity' || comp === 'Salaried') ? 'bg-primary border-primary text-white' : 'border-secondary/20 group-hover:border-secondary/50 bg-white'}`}>
                  {(comp === 'Equity' || comp === 'Salaried') && <div className="w-2 h-2 bg-white rounded-sm" />}
                </div>
                <span className="text-sm font-semibold">{comp}</span>
              </label>
            ))}
          </div>

          <button className="w-full py-3 border border-secondary/20 text-secondary font-bold text-sm rounded-md hover:bg-secondary/5 transition-colors">
            RESET FILTERS
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-9 p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="mb-8">
          <h1 className="text-3xl font-black font-serif tracking-tight mb-2">Open Problems</h1>
          <p className="text-secondary/60 max-w-2xl">Discover and collaborate on high-impact research challenges. Filter by discipline, commitment, and compensation.</p>
        </div>

        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-secondary/10">
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary/50">Active Filters:</span>
          <div className="flex gap-2">
            {['Biotech', 'Part-time'].map(filter => (
              <span key={filter} className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                {filter}
                <X className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockProblems.map(prob => (
            <div key={prob.id} className={`card-premium bg-white border border-secondary/10 flex flex-col hover:shadow-soft transition-all ${prob.closed ? 'opacity-50' : ''}`}>
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  {prob.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-secondary/40 hover:text-primary transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold font-serif mb-3 leading-snug">{prob.title}</h3>
              <p className="text-sm text-secondary/70 leading-relaxed mb-8 flex-1">{prob.desc}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-secondary/10">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Skills</h4>
                  <p className="text-sm font-semibold">{prob.skills}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Commitment</h4>
                  <p className="text-sm font-semibold">{prob.commitment}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Deadline</h4>
                  <p className="text-sm font-semibold">{prob.deadline}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-secondary/70">{prob.lab}</span>
                <span>{prob.compensation}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default ProblemBoard;
