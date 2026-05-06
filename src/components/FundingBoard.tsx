"use client";
import React from 'react';
import { Search, Calendar, QrCode, X, ChevronDown, CheckCircle2, Bookmark, ChevronUp } from 'lucide-react';

const mockGrants = [
  {
    id: 1,
    title: 'Quantum Computing Infrastructure Access Phase II',
    issuer: 'National Science Foundation (NSF)',
    type: 'Grant',
    match: 95,
    tags: ['Compute', 'Physics', 'Institutional'],
    deadline: 'Oct 24, 2024',
    value: '$250,000 Credits'
  },
  {
    id: 2,
    title: 'High-Resolution Cryo-EM Shared Facility Usage',
    issuer: 'Biotech Global Consortium',
    type: 'Equipment',
    match: 88,
    tags: ['Microscopy', 'Biology'],
    deadline: 'Nov 12, 2024',
    value: 'In-Kind Access'
  }
];

const mockMicroTasks = [
  {
    id: 1,
    title: 'Validate Genomic Sequence Alignments',
    desc: 'Cross-reference 500 sequence fragments against the Reference Genome V3.8 to identify potential mismatch clusters.',
    status: 'Urgent',
    time: 'Est. 45 Mins',
    credits: '50 Resona Credits'
  },
  {
    id: 2,
    title: 'Dataset Metadata Tagging: Astro-Imaging',
    desc: 'Tag 100 deep-space observation images with standard astronomical coordinates and celestial object identifiers.',
    status: 'Open',
    time: 'Est. 2 Hours',
    credits: '120 Resona Credits'
  }
];

const FundingBoard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'grants' | 'tasks'>('grants');
  const [activeFilters, setActiveFilters] = React.useState<string[]>(['Compute', 'Physical Sciences']);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());
  const [bookmarkedIds, setBookmarkedIds] = React.useState<Set<number>>(new Set());
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
        showFeedback('Opportunity saved to shortlist');
      }
      return next;
    });
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
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-background">
      
      {/* Left Filters Sidebar */}
      <aside className="lg:col-span-2 border-r border-[#F3F4F6] bg-white p-8 space-y-2 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
        <h2 className="font-black font-serif text-lg tracking-tight mb-8">Feed Filters</h2>
        
        {/* Discipline Section */}
        <div className="border-b border-[#F3F4F6] pb-4 mb-4">
          <button 
            onClick={() => toggleSection('Discipline')}
            className="w-full flex items-center justify-between py-2 group"
          >
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-colors">Discipline</h3>
            {expandedSections.has('Discipline') ? <ChevronUp className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" /> : <ChevronDown className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />}
          </button>
          
          {expandedSections.has('Discipline') && (
            <div className="space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              {['Life Sciences', 'Physical Sciences', 'Engineering'].map(disc => (
                <label 
                  key={disc} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFilter(disc);
                  }}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(disc) ? 'bg-primary border-primary text-white' : 'border-secondary/20 bg-white group-hover:border-primary/50'}`}>
                    {activeFilters.includes(disc) && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${activeFilters.includes(disc) ? 'text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                    {disc}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Resource Type Section */}
        <div className="border-b border-[#F3F4F6] pb-4 mb-4">
          <button 
            onClick={() => toggleSection('Resource Type')}
            className="w-full flex items-center justify-between py-2 group"
          >
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-colors">Resource Type</h3>
            {expandedSections.has('Resource Type') ? <ChevronUp className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" /> : <ChevronDown className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />}
          </button>
          
          {expandedSections.has('Resource Type') && (
            <div className="space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              {['Grants', 'Equipment', 'Compute', 'Datasets'].map(type => (
                <label 
                  key={type} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFilter(type);
                  }}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(type) ? 'bg-primary border-primary text-white' : 'border-secondary/20 bg-white group-hover:border-primary/50'}`}>
                    {activeFilters.includes(type) && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${activeFilters.includes(type) ? 'text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                    {type}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Eligibility Section */}
        <div className="border-b border-[#F3F4F6] pb-4 mb-4">
          <button 
            onClick={() => toggleSection('Eligibility')}
            className="w-full flex items-center justify-between py-2 group"
          >
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-colors">Eligibility</h3>
            {expandedSections.has('Eligibility') ? <ChevronUp className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" /> : <ChevronDown className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />}
          </button>
          
          {expandedSections.has('Eligibility') && (
            <div className="space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              {['Academic', 'Non-Profit', 'Corporate'].map(elig => (
                <label 
                  key={elig} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFilter(elig);
                  }}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(elig) ? 'bg-primary border-primary text-white' : 'border-secondary/20 bg-white group-hover:border-primary/50'}`}>
                    {activeFilters.includes(elig) && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${activeFilters.includes(elig) ? 'text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                    {elig}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Deadline Section */}
        <div className="border-b border-[#F3F4F6] pb-4 mb-4">
          <button 
            onClick={() => toggleSection('Deadline')}
            className="w-full flex items-center justify-between py-2 group"
          >
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-secondary transition-colors">Deadline</h3>
            {expandedSections.has('Deadline') ? <ChevronUp className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" /> : <ChevronDown className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />}
          </button>
          
          {expandedSections.has('Deadline') && (
            <div className="space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between p-3 border border-secondary/10 bg-white rounded text-xs font-bold text-secondary/60 cursor-pointer hover:border-secondary/30 transition-colors">
                SELECT DATE RANGE
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-7 p-8 md:p-12 animate-in fade-in duration-700">
        <div className="mb-8">
          <h1 className="text-3xl font-black font-serif tracking-tight text-secondary mb-2 uppercase">Funding & Resources</h1>
          <p className="text-sm text-secondary/50 font-semibold tracking-wide">Discover grants, compute credits, and research tasks.</p>
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
              placeholder="Search grants, compute credits, datasets..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-sm px-4 outline-none placeholder:text-secondary/30 font-medium h-12"
            />
            <div className="flex items-center p-1 bg-secondary/5 rounded-xl ml-2 border border-secondary/5">
              <button 
                onClick={() => setActiveTab('grants')}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  activeTab === 'grants' 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-secondary/40 hover:text-secondary/60 hover:bg-secondary/5'
                }`}
              >
                Grants & Resources
              </button>
              <button 
                onClick={() => setActiveTab('tasks')}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  activeTab === 'tasks' 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-secondary/40 hover:text-secondary/60 hover:bg-secondary/5'
                }`}
              >
                Micro-Tasks
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Row & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#F3F4F6]">
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map(filter => (
              <div key={filter} className="flex items-center gap-2 px-3 py-1 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-widest animate-in zoom-in-95 duration-200">
                {filter}
                <button onClick={() => setActiveFilters(prev => prev.filter(f => f !== filter))} className="hover:text-primary transition-colors">
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

        <div className="space-y-16">
          {/* Active Grants Section */}
          {activeTab === 'grants' && (
            <section className="animate-in fade-in duration-500">
              <div className="flex justify-between items-end border-b-2 border-secondary pb-4 mb-8">
                <h2 className="text-xl font-black uppercase tracking-tight">Active Grants & Resources</h2>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary/50">128 Results Found</span>
              </div>

              <div className="space-y-6">
                {mockGrants.map(grant => (
                  <div key={grant.id} className="group relative bg-white border border-secondary/10 rounded-2xl p-8 hover:shadow-soft transition-all flex flex-col">
                    
                    {/* Utility Bar */}
                    <div className="absolute top-6 right-6 flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] font-black uppercase tracking-widest text-secondary/30 mb-0.5">Eligibility</span>
                        <span className="px-2 py-0.5 bg-primary/5 text-primary rounded-full text-[10px] font-black border border-primary/10">
                          {grant.match}% Match
                        </span>
                      </div>
                      <button 
                        onClick={() => toggleBookmark(grant.id)}
                        className={`p-2 rounded-full transition-all ${bookmarkedIds.has(grant.id) ? 'text-primary bg-primary/5' : 'text-secondary/20 hover:text-primary hover:bg-primary/5'}`}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedIds.has(grant.id) ? 'fill-primary' : ''}`} />
                      </button>
                    </div>

                    <div className="mb-8">
                      <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary/70">
                          {grant.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-serif text-secondary mb-2 group-hover:text-primary transition-colors leading-tight max-w-[80%]">
                        {grant.title}
                      </h3>
                      <p className="text-sm font-semibold text-secondary/50 tracking-wide">{grant.issuer}</p>
                    </div>

                    <div className="flex gap-2 mb-10">
                      {grant.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-muted text-secondary/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 pt-8 border-t border-secondary/5">
                      <div className="flex gap-12">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-1">Deadline</span>
                          <span className="text-sm font-bold text-secondary flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-secondary/40" />
                            {grant.deadline}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-1">Value</span>
                          <span className="text-sm font-bold text-secondary flex items-center gap-2">
                            💰 {grant.value}
                          </span>
                        </div>
                      </div>
                      <button className="px-10 py-4 bg-secondary text-white text-xs font-black uppercase tracking-widest hover:bg-secondary/90 transition-all rounded-xl shadow-soft">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Micro-Tasks Section */}
          {activeTab === 'tasks' && (
            <section className="animate-in fade-in duration-500">
              <div className="flex justify-between items-end border-b-2 border-secondary pb-4 mb-8">
                <h2 className="text-xl font-black uppercase tracking-tight">Urgent Micro-Tasks</h2>
                <button className="text-[10px] font-black uppercase tracking-widest text-secondary/50 hover:text-secondary transition-colors">VIEW ALL TASKS</button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {mockMicroTasks.map(task => (
                  <div key={task.id} className="group bg-white border border-secondary/10 rounded-2xl p-8 hover:shadow-soft transition-all flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <h3 className="text-lg font-bold font-serif text-secondary leading-snug">{task.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0 ${task.status === 'Urgent' ? 'bg-primary text-white' : 'bg-muted text-secondary/70'}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary/70 leading-relaxed mb-8 flex-1" style={{ lineHeight: '1.7' }}>{task.desc}</p>
                    
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-10 pb-6 border-b border-secondary/5">
                      <span className="flex items-center gap-1.5">⏱ {task.time}</span>
                      <span className="flex items-center gap-1.5">🪙 {task.credits}</span>
                    </div>
                    
                    <button className="w-full py-4 border border-secondary/10 text-secondary font-semibold text-sm hover:bg-secondary/5 hover:border-secondary/20 transition-all rounded-xl">
                      Accept Task
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Right Sidebar - Stats Widgets */}
      <aside className="lg:col-span-3 border-l border-secondary/5 bg-white p-8 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-8">Your Activity & Stats</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-secondary/10 p-6 rounded-2xl flex flex-col justify-between shadow-soft">
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-2">Total Managed</p>
               <div className="text-2xl font-bold font-serif tracking-tighter text-secondary">$4.2M</div>
             </div>
             <p className="text-[9px] font-semibold text-secondary/40 mt-4 leading-relaxed">Total funding volume distributed across Resona network partners.</p>
          </div>
          
          <div className="bg-white border border-secondary/10 p-6 rounded-2xl flex flex-col justify-between shadow-soft">
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-2">Active Proposals</p>
               <div className="text-2xl font-bold font-serif tracking-tighter text-secondary">18</div>
             </div>
             <p className="text-[9px] font-semibold text-secondary/40 mt-4 leading-relaxed">Proposals currently under review by institutional partners.</p>
          </div>

          <div className="bg-white border border-secondary/10 p-6 rounded-2xl flex flex-col justify-between shadow-soft">
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-2">Your Credits</p>
               <div className="text-2xl font-bold font-serif tracking-tighter text-secondary flex items-baseline gap-2">
                 1,240 <span className="text-[10px] font-black tracking-widest text-secondary/20 font-sans">RESC</span>
               </div>
             </div>
             <button className="text-[9px] font-black uppercase tracking-widest underline underline-offset-4 text-primary hover:text-primary/80 text-left mt-6">
               Withdraw to Wallet
             </button>
          </div>

          <div className="bg-white border border-secondary/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/20 cursor-pointer transition-all group shadow-soft py-10">
             <QrCode className="w-8 h-8 text-secondary/20 group-hover:text-primary transition-colors" />
             <span className="text-[9px] font-black uppercase tracking-widest text-secondary/40 group-hover:text-primary transition-colors">Unified Identity</span>
          </div>
        </div>
      </aside>

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

export default FundingBoard;
