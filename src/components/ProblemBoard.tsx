"use client";
import React from 'react';
import { Search, Bookmark, X, ChevronDown, ChevronUp, CheckCircle2, Code, Microscope, Layers, Atom, Database, Clock, Coins, Wallet, CreditCard, Check } from 'lucide-react';

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
  const [problems, setProblems] = React.useState(mockProblems);
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = React.useState<string[]>(['Biotech', 'Part-time']);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [bookmarkedIds, setBookmarkedIds] = React.useState<Set<number>>(new Set());
  const [proposedSolutionIds, setProposedSolutionIds] = React.useState<Set<number>>(new Set());
  const [toast, setToast] = React.useState<{ show: boolean, message: string }>({ show: false, message: '' });

  const showFeedback = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else {
        next.add(id);
        showFeedback('Problem bookmarked');
      }
      return next;
    });
  };

  const handleDismiss = (id: number) => {
    setProblems(prev => prev.filter(p => p.id !== id));
    showFeedback('Problem dismissed');
  };

  const handlePropose = (id: number) => {
    setProposedSolutionIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    showFeedback('Solution proposal initiated');
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      if (prev.includes(filter)) return prev.filter(f => f !== filter);
      return [...prev, filter];
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Filters Sidebar */}
      <aside className="lg:col-span-2 space-y-6 sticky top-28 self-start">
        <h2 className="font-black font-serif text-lg tracking-tight">Feed Filters</h2>
        
        {/* Discipline Section */}
        <div>
          <button 
            onClick={() => toggleSection('Discipline')}
            className="w-full flex items-center justify-between py-2 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <Microscope className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold">Discipline</h3>
            </div>
            {expandedSections.has('Discipline') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Discipline') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {[
                { name: 'Computer Science', icon: <Code className="w-4 h-4 text-primary" /> },
                { name: 'Biotech', icon: <Microscope className="w-4 h-4 text-primary" /> },
                { name: 'Materials', icon: <Layers className="w-4 h-4 text-primary" /> },
                { name: 'Physics', icon: <Atom className="w-4 h-4 text-primary" /> },
                { name: 'Data Science', icon: <Database className="w-4 h-4 text-primary" /> }
              ].map(disc => (
                <button 
                  key={disc.name}
                  onClick={() => toggleFilter(disc.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(disc.name) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {disc.icon}
                    {disc.name}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(disc.name) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(disc.name) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Time Commitment Section */}
        <div>
          <button 
            onClick={() => toggleSection('Time Commitment')}
            className="w-full flex items-center justify-between py-2 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold">Time Commitment</h3>
            </div>
            {expandedSections.has('Time Commitment') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Time Commitment') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {['Full-time', 'Part-time', 'Contract / Bounty'].map(time => (
                <button 
                  key={time}
                  onClick={() => toggleFilter(time)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(time) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    {time}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(time) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(time) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Compensation Section */}
        <div>
          <button 
            onClick={() => toggleSection('Compensation')}
            className="w-full flex items-center justify-between py-2 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <Coins className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold">Compensation</h3>
            </div>
            {expandedSections.has('Compensation') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Compensation') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {[
                { name: 'Equity', icon: <Coins className="w-4 h-4 text-primary" /> },
                { name: 'Grant Funded', icon: <Wallet className="w-4 h-4 text-primary" /> },
                { name: 'Salaried', icon: <CreditCard className="w-4 h-4 text-primary" /> }
              ].map(comp => (
                <button 
                  key={comp.name}
                  onClick={() => toggleFilter(comp.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(comp.name) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {comp.icon}
                    {comp.name}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(comp.name) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(comp.name) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

      </aside>

      {/* Main Content */}
      <main className="lg:col-span-10 p-8 md:p-12 animate-in fade-in duration-700">
        <div className="mb-8">
          <h1 className="text-3xl font-black font-serif tracking-tight text-secondary mb-2 uppercase">Open Problems</h1>
          <p className="text-sm text-secondary/50 font-semibold tracking-wide">Discover and collaborate on high-impact research challenges.</p>
        </div>

        {/* Omnibar */}
        <div className="mb-6 relative group">
          <div className="absolute inset-0 bg-primary/5 blur-2xl group-focus-within:bg-primary/10 transition-all opacity-0 group-focus-within:opacity-100" />
          <div className="relative flex items-center bg-white border border-secondary/10 rounded-2xl shadow-soft p-1.5 focus-within:border-primary/30 transition-all">
            <div className="pl-4 pr-3 flex items-center border-r border-secondary/5">
              <Search className="w-4 h-4 text-secondary/30" />
            </div>
            <input 
              type="text" 
              placeholder="Search problem scopes, keywords, or required skills..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-sm px-4 outline-none placeholder:text-secondary/30 font-medium h-12"
            />
          </div>
        </div>

        {/* Active Filters Row & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#F3F4F6]">
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map(filter => (
              <div key={filter} className="flex items-center gap-2 px-3 py-1 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-widest animate-in zoom-in-95 duration-200">
                {filter}
                <button onClick={() => toggleFilter(filter)} className="hover:text-primary transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {activeFilters.length > 0 && (
              <button 
                onClick={() => setActiveFilters([])}
                className="text-[10px] font-bold text-secondary/40 hover:text-secondary transition-colors ml-2"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary/40">
            <span>Sort by:</span>
            <button className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors">
              Closing Soon
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems
            .filter(prob => {
              const matchesSearch = prob.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                   prob.desc.toLowerCase().includes(searchTerm.toLowerCase());
              if (activeFilters.length === 0) return matchesSearch;
              const matchesFilter = activeFilters.some(f => 
                prob.tags.includes(f.toUpperCase()) || 
                prob.commitment.includes(f) || 
                prob.compensation.includes(f)
              );
              return matchesSearch && (activeFilters.length > 0 ? matchesFilter : true);
            })
            .map(prob => (
            <div key={prob.id} className={`group relative bg-white border border-secondary/10 rounded-2xl p-6 shadow-sm hover:shadow-soft transition-all flex flex-col animate-in fade-out duration-300 zoom-in-95 ${prob.closed ? 'opacity-50' : ''}`}>
              
              {/* Utility Bar */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button 
                  onClick={() => toggleBookmark(prob.id)}
                  className={`p-1.5 rounded-full transition-all ${bookmarkedIds.has(prob.id) ? 'text-primary bg-primary/5' : 'text-secondary/20 hover:text-primary hover:bg-primary/5'}`} 
                  title="Save to Shortlist"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedIds.has(prob.id) ? 'fill-primary' : ''}`} />
                </button>
                <button 
                  onClick={() => handleDismiss(prob.id)}
                  className="p-1.5 rounded-full text-secondary/20 hover:text-primary hover:bg-primary/5 transition-all" 
                  title="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                  {prob.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-muted text-secondary/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif mb-3 leading-snug text-secondary">{prob.title}</h3>
              <p className="text-sm text-secondary/70 leading-relaxed mb-8 flex-1" style={{ lineHeight: '1.7' }}>{prob.desc}</p>

              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-secondary/5">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Skills</h4>
                  <p className="text-sm font-semibold text-secondary/80">{prob.skills}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Commitment</h4>
                  <p className="text-sm font-semibold text-secondary/80">{prob.commitment}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Deadline</h4>
                  <p className="text-sm font-semibold text-secondary/80">{prob.deadline}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-bold mb-6">
                <span className="text-secondary/70">{prob.lab}</span>
                <span className="text-secondary">{prob.compensation}</span>
              </div>

              <button 
                onClick={() => !prob.closed && !proposedSolutionIds.has(prob.id) && handlePropose(prob.id)}
                className={`w-full btn-outline !rounded-xl ${
                  prob.closed || proposedSolutionIds.has(prob.id)
                    ? 'opacity-50 cursor-default' 
                    : ''
                }`}
              >
                {prob.closed ? 'Closed' : (proposedSolutionIds.has(prob.id) ? 'Proposal Sent' : 'Propose Solution')}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Feedback Toast */}
      {toast.show && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 ring-4 ring-primary/5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest">{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProblemBoard;
