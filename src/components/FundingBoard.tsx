"use client";
import React from 'react';
import { Search, Calendar, QrCode } from 'lucide-react';

const mockGrants = [
  {
    id: 1,
    title: 'QUANTUM COMPUTING INFRASTRUCTURE ACCESS PHASE II',
    issuer: 'NATIONAL SCIENCE FOUNDATION (NSF)',
    type: 'GRANT',
    tags: ['COMPUTE', 'PHYSICS', 'INSTITUTIONAL'],
    deadline: 'OCT 24, 2024',
    value: '$250,000 CREDITS'
  },
  {
    id: 2,
    title: 'HIGH-RESOLUTION CRYO-EM SHARED FACILITY USAGE',
    issuer: 'BIOTECH GLOBAL CONSORTIUM',
    type: 'EQUIPMENT',
    tags: ['MICROSCOPY', 'BIOLOGY'],
    deadline: 'NOV 12, 2024',
    value: 'IN-KIND ACCESS'
  }
];

const mockMicroTasks = [
  {
    id: 1,
    title: 'VALIDATE GENOMIC SEQUENCE ALIGNMENTS',
    desc: 'Cross-reference 500 sequence fragments against the Reference Genome V3.8 to identify potential mismatch clusters.',
    status: 'URGENT',
    time: 'EST. 45 MINS',
    credits: '50 RESONA CREDITS'
  },
  {
    id: 2,
    title: 'DATASET METADATA TAGGING: ASTRO-IMAGING',
    desc: 'Tag 100 deep-space observation images with standard astronomical coordinates and celestial object identifiers.',
    status: 'OPEN',
    time: 'EST. 2 HOURS',
    credits: '120 RESONA CREDITS'
  }
];

const FundingBoard: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto min-h-screen bg-background flex flex-col animate-in fade-in duration-500">
      
      {/* Top Header Section */}
      <header className="px-8 md:px-12 py-10 border-b border-secondary/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white">
        <div>
          <h1 className="text-4xl font-black font-serif uppercase tracking-tight mb-6">Funding & Resources</h1>
          <div className="flex gap-2">
            <button className="px-6 py-2.5 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-md">
              Grants & Resources
            </button>
            <button className="px-6 py-2.5 bg-secondary/5 text-secondary/60 hover:bg-secondary/10 hover:text-secondary transition-colors text-[10px] font-black uppercase tracking-widest rounded-md">
              Micro-Tasks
            </button>
          </div>
        </div>
        <button className="px-6 py-4 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-md flex items-center gap-2 shadow-sm">
          + Post Opportunity
        </button>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Filters Sidebar */}
        <aside className="lg:col-span-3 border-r border-secondary/5 bg-secondary/[0.02] p-8 flex flex-col">
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-1">Filters</h2>
              <p className="text-xs text-secondary/40 font-bold uppercase tracking-wider">Refine Board View</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                <input 
                  type="text" 
                  placeholder="Search opportunities..." 
                  className="w-full text-sm pl-10 p-3 rounded border border-secondary/10 bg-white outline-none focus:border-primary/30"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Discipline</h3>
              {['Life Sciences', 'Physical Sciences', 'Engineering'].map(disc => (
                <label key={disc} className="flex items-center gap-3 cursor-pointer group uppercase text-xs tracking-wider">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${disc === 'Physical Sciences' ? 'bg-primary border-primary text-white' : 'border-secondary/20 group-hover:border-secondary/50 bg-white'}`}>
                    {disc === 'Physical Sciences' && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <span className="font-bold">{disc}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Resource Type</h3>
              {['Grants', 'Equipment', 'Compute', 'Datasets'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group uppercase text-xs tracking-wider">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${(type === 'Grants' || type === 'Compute') ? 'bg-primary border-primary text-white' : 'border-secondary/20 group-hover:border-secondary/50 bg-white'}`}>
                    {(type === 'Grants' || type === 'Compute') && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <span className="font-bold">{type}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Eligibility</h3>
              {['Academic', 'Non-Profit'].map(elig => (
                <label key={elig} className="flex items-center gap-3 cursor-pointer group uppercase text-xs tracking-wider">
                  <div className="w-4 h-4 rounded-sm border border-secondary/20 group-hover:border-secondary/50 bg-white transition-colors" />
                  <span className="font-bold">{elig}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Deadline</h3>
              <div className="flex items-center justify-between p-3 border border-secondary/10 bg-white rounded text-xs font-bold text-secondary/60 cursor-pointer hover:border-secondary/30 transition-colors">
                SELECT DATE RANGE
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          </div>

          <button className="w-full mt-12 py-4 border border-secondary/20 text-secondary font-black text-xs uppercase tracking-widest hover:bg-secondary/5 transition-colors rounded-md">
            APPLY FILTERS
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 p-8 md:p-12 space-y-16 overflow-y-auto">
          
          {/* Active Grants Section */}
          <section>
            <div className="flex justify-between items-end border-b-2 border-secondary pb-4 mb-8">
              <h2 className="text-xl font-black uppercase tracking-tight">Active Grants & Resources</h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary/50">128 Results Found</span>
            </div>

            <div className="space-y-6">
              {mockGrants.map(grant => (
                <div key={grant.id} className="bg-white border border-secondary/10 flex flex-col md:flex-row hover:shadow-soft transition-all">
                  <div className="w-full md:w-64 h-48 md:h-auto bg-secondary/5 border-b md:border-b-0 md:border-r border-secondary/10 relative overflow-hidden flex items-center justify-center">
                     <svg className="w-full h-full text-secondary/10 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
                        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
                     </svg>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight leading-snug">{grant.title}</h3>
                      <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary/70 shrink-0">
                        {grant.type}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-secondary/60 uppercase tracking-widest mb-6">{grant.issuer}</p>
                    
                    <div className="flex gap-2 mb-8">
                      {grant.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col md:flex-row justify-between md:items-center gap-6 pt-6 border-t border-secondary/5">
                      <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-secondary">
                        <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> DEADLINE: {grant.deadline}</span>
                        <span className="flex items-center gap-2">💰 VALUE: {grant.value}</span>
                      </div>
                      <button className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-md shadow-sm">
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro-Tasks Section */}
          <section>
            <div className="flex justify-between items-end border-b-2 border-secondary pb-4 mb-8">
              <h2 className="text-xl font-black uppercase tracking-tight">Urgent Micro-Tasks</h2>
              <button className="text-[10px] font-black uppercase tracking-widest text-secondary/50 hover:text-secondary transition-colors">VIEW ALL TASKS</button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockMicroTasks.map(task => (
                <div key={task.id} className="bg-white border border-secondary/10 p-6 md:p-8 hover:shadow-soft transition-all flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-sm font-black uppercase tracking-tight leading-snug">{task.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${task.status === 'URGENT' ? 'bg-primary text-white' : 'bg-muted text-secondary/70'}`}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm text-secondary/70 leading-relaxed mb-6 flex-1">{task.desc}</p>
                  
                  <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-secondary/60 mb-6">
                    <span className="flex items-center gap-1.5">⏱ {task.time}</span>
                    <span className="flex items-center gap-1.5">🪙 {task.credits}</span>
                  </div>
                  
                  <button className="w-full py-3 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary/5 transition-colors rounded-md">
                    ACCEPT TASK
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Stats Widgets */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
            <div className="bg-secondary text-white p-6 md:p-8 col-span-2 md:col-span-1 flex flex-col justify-between">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">TOTAL MANAGED</p>
                 <div className="text-4xl font-black tracking-tighter">$4.2M</div>
               </div>
               <p className="text-[8px] font-bold uppercase tracking-widest text-white/40 mt-8">TOTAL FUNDING VOLUME DISTRIBUTED ACROSS RESONA NETWORK PARTNERS.</p>
            </div>
            
            <div className="bg-secondary/5 border border-secondary/10 p-6 md:p-8 flex flex-col justify-between">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-2">ACTIVE PROPOSALS</p>
                 <div className="text-4xl font-black tracking-tighter pb-4 border-b-4 border-secondary/20 inline-block w-16">18</div>
               </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/10 p-6 md:p-8 flex flex-col justify-between">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-2">YOUR CREDITS</p>
                 <div className="text-4xl font-black tracking-tighter flex items-baseline gap-2">
                   1,240 <span className="text-xs font-black tracking-widest text-secondary/40">RESC</span>
                 </div>
               </div>
               <button className="text-[10px] font-black uppercase tracking-widest underline underline-offset-4 text-secondary/60 hover:text-secondary text-left mt-8">
                 WITHDRAW TO WALLET
               </button>
            </div>

            <div className="bg-secondary/5 border border-secondary/10 p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover:bg-secondary/10 cursor-pointer transition-colors group">
               <QrCode className="w-12 h-12 text-secondary/30 group-hover:text-secondary transition-colors" />
               <span className="text-[10px] font-black uppercase tracking-widest text-secondary/60 group-hover:text-secondary transition-colors">UNIFIED IDENTITY</span>
            </div>
          </section>

        </main>
      </div>

    </div>
  );
};

export default FundingBoard;
