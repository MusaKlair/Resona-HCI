"use client";
import React, { useState } from 'react';
import { ShieldCheck, Download, Link as LinkIcon, Network, FileText } from 'lucide-react';

const managedContent = [
  {
    id: 1,
    title: 'Decentralized peer review: A structural analysis of trust metrics in open-source research.',
    desc: 'Published in J. Open Science. Exploratory data on how blockchain-verified credentials affect citation weight.',
    privacy: 'PUBLIC'
  },
  {
    id: 2,
    title: 'The Ethical Scaffolding of LLM Decision Engines.',
    desc: 'Working paper on the bias injection risks during the reinforcement learning from human feedback (RLHF) phase.',
    privacy: 'VERIFIED'
  },
  {
    id: 3,
    title: 'Project: NEURON-X Raw Data Stream (Q3 2023).',
    desc: 'Raw telemetry from intracranial sensors during visual stimuli processing. Under embargo.',
    privacy: 'PRIVATE'
  }
];

const ProfileDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-0 pb-12 animate-in fade-in duration-500">
      
      <section className="relative bg-surface border border-border rounded-t-3xl overflow-hidden shadow-sm mb-12">
        {/* Professional Research Banner - Reliable Source */}
        <div className="h-64 w-full relative overflow-hidden bg-secondary">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Research Banner" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary/30 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="px-8 md:px-12 pb-12 flex flex-col md:flex-row gap-8 -mt-20 relative z-10">
          {/* Circular Professional Profile Picture */}
          <div className="w-48 h-48 bg-surface border-8 border-white rounded-full overflow-hidden shadow-2xl shrink-0">
             <img src="/avatar_sarah.png" alt="Dr. Ayesha Malik" className="w-full h-full object-cover scale-110" />
          </div>
          
          <div className="flex-1 pt-24 space-y-6">
            <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
              <div className="space-y-3">
                <h1 className="text-5xl font-black font-serif tracking-tight text-text-primary flex items-center gap-3">
                  Dr. Ayesha Malik
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-sm font-bold text-text-secondary">Lead Researcher, Cognitive Architecture Institute</p>
                  <span className="hidden sm:block text-text-secondary">â€¢</span>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                    orcid.org/0000-0002-1825-0097
                  </a>
                </div>
              </div>
              
              {/* Profile Actions - Self View */}
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none bg-surface-alt border border-border text-text-primary px-8 py-2.5 rounded-md font-bold text-sm hover:bg-surface-alt transition-all flex items-center gap-2">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Quantum Ethics', 'Neural Mapping', 'PyTorch', 'Open Science'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface-alt border border-border rounded-full text-[10px] font-black uppercase tracking-wider text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl font-medium">
              Pioneering the intersection of biological neural paths and synthetic decision-making frameworks. Specializing in ethical AI deployment and decentralized peer review systems.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Credibility Index & Quick Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-surface border border-border rounded-2xl shadow-soft flex items-center justify-between group transition-all">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-1">Current Standing</div>
                <div className="text-4xl font-black font-serif text-text-primary mb-1">850</div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Top 2% Globally</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-1">Metric</div>
                <div className="text-sm font-bold text-text-primary">Credibility Index</div>
                <div className="text-[10px] font-bold text-text-secondary mt-1 italic">Verified</div>
              </div>
            </div>
            
            <div className="p-8 bg-surface border border-border rounded-2xl shadow-soft flex items-center justify-between group transition-all">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-1">Academic Reach</div>
                <div className="text-4xl font-black font-serif text-text-primary mb-1">14.2k</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">Global Citations</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-1">Growth</div>
                <div className="text-sm font-bold text-primary">+12% YoY</div>
                <div className="text-[10px] font-bold text-text-secondary mt-1 italic">Last 12 Months</div>
              </div>
            </div>
          </section>

        {/* Contribution Graph - Unified Card */}
        <section className="bg-surface border border-border rounded-2xl shadow-soft overflow-hidden">
          <div className="p-8 border-b border-border flex items-center justify-between">
            <h2 className="text-xl font-black font-serif tracking-tight text-text-primary">Contribution Graph</h2>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-border text-text-primary px-4 py-2 rounded-md hover:bg-surface-alt transition-colors">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>
          
          <div className="p-8 relative group bg-surface">
            {/* Summary Metrics */}
            <div className="mb-8">
              <div className="text-xl font-bold text-text-primary tracking-tight">412 Contributions in the last year</div>
              <div className="text-xs text-text-secondary font-medium">Includes publications, peer reviews, and problem-solving.</div>
            </div>

            {/* Heatmap Matrix - Responsive & Edge-to-Edge */}
            <div className="w-full">
                {/* Month Labels */}
                <div className="flex justify-between mb-3 text-[9px] font-black text-text-secondary uppercase tracking-[0.2em] px-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                    <div key={month}>{month}</div>
                  ))}
                </div>

                {/* Grid Container with Day Labels */}
                <div className="flex gap-3">
                  {/* Day Labels */}
                  <div className="flex flex-col gap-[3px] text-[9px] font-bold text-text-secondary mt-[2px]">
                    <div className="h-[10px] flex items-center"></div>
                    <div className="h-[10px] flex items-center">Mon</div>
                    <div className="h-[10px] flex items-center"></div>
                    <div className="h-[10px] flex items-center">Wed</div>
                    <div className="h-[10px] flex items-center"></div>
                    <div className="h-[10px] flex items-center">Fri</div>
                    <div className="h-[10px] flex items-center"></div>
                  </div>

                  <div className="flex flex-col gap-[3px] flex-1">
                    {[...Array(7)].map((_, day) => (
                      <div key={day} className="flex gap-[3px] w-full">
                        {[...Array(52)].map((_, week) => {
                          const randomSeed = Math.random();
                          let level = 0;
                          let contributions = 0;
                          
                          if (randomSeed > 0.9) { level = 3; contributions = Math.floor(Math.random() * 5) + 6; }
                          else if (randomSeed > 0.75) { level = 2; contributions = Math.floor(Math.random() * 3) + 3; }
                          else if (randomSeed > 0.5) { level = 1; contributions = Math.floor(Math.random() * 2) + 1; }
                          
                          if ((week > 10 && week < 14) || (week > 25 && week < 29) || (week > 40 && week < 44)) {
                            if (randomSeed > 0.3) { level = Math.max(level, 2); contributions = Math.max(contributions, 4); }
                            if (randomSeed > 0.6) { level = 3; contributions = Math.max(contributions, 7); }
                          }

                          const colors = [
                            'bg-surface-alt',          // L0: Empty
                            'bg-primary/20',         // L1: Low
                            'bg-primary/60',         // L2: Medium
                            'bg-primary'             // L3: High
                          ];

                          // Date Calculation Logic
                          const startDate = new Date(2023, 4, 1); // Start from May 1st
                          const currentDate = new Date(startDate);
                          currentDate.setDate(startDate.getDate() + (week * 7) + day);
                          const dateString = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                          
                          return (
                            <div 
                              key={`${week}-${day}`} 
                              className={`flex-1 aspect-square min-w-[4px] rounded-[1.5px] ${colors[level]} transition-all hover:scale-150 hover:z-10 cursor-pointer relative group/cell`}
                            >
                              {/* Detailed Tooltip Popover */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-max opacity-0 group-hover/cell:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/cell:translate-y-0">
                                <div className="bg-secondary text-white text-[10px] font-medium px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                                  {contributions > 0 ? `${contributions} contributions` : 'No contributions'} on {dateString}
                                </div>
                                {/* Tooltip Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[4px] border-transparent border-t-[#1B1B1F]" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* Legend - Restored Peach Scale */}
            <div className="flex items-center justify-end gap-3 mt-8">
              <span className="text-[9px] font-black text-text-secondary uppercase tracking-widest">Less Activity</span>
              <div className="flex gap-[3px]">
                <div className="w-3 h-3 rounded-[1.5px] bg-surface-alt" />
                <div className="w-3 h-3 rounded-[1.5px] bg-primary/20" />
                <div className="w-3 h-3 rounded-[1.5px] bg-primary/60" />
                <div className="w-3 h-3 rounded-[1.5px] bg-primary" />
              </div>
              <span className="text-[9px] font-black text-text-secondary uppercase tracking-widest">More</span>
            </div>
          </div>
        </section>

        {/* Managed Content */}
        <section>
          <div className="border-b border-border pb-4 mb-8">
            <h2 className="text-xl font-black font-serif tracking-tight text-text-primary">Managed Content & Publications</h2>
          </div>

          <div className="space-y-6">
            {managedContent.map(item => (
              <div key={item.id} className="bg-surface border border-border p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 rounded-2xl hover:shadow-soft transition-all group">
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold font-serif text-text-primary group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">{item.desc}</p>
                </div>
                
                <div className="flex bg-surface-alt p-1 rounded-xl overflow-hidden shrink-0 border border-border">
                  {['PUBLIC', 'VERIFIED', 'PRIVATE'].map(priv => (
                    <button 
                      key={priv}
                      className={`px-5 py-2 text-[9px] font-black uppercase tracking-[0.15em] rounded-lg transition-all ${
                        item.privacy === priv 
                          ? 'bg-secondary text-white shadow-sm' 
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                      }`}
                    >
                      {priv}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Right Sidebar - Academic Authority Hub */}
      <aside className="lg:col-span-4 space-y-12 lg:pl-12 lg:border-l border-border">
        
        {/* Impact Metrics Section - Deduplicated */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary mb-6 pb-2 border-b border-border">Collaboration Impact</h3>
          <div className="space-y-4">
            <div className="p-5 bg-surface border border-border rounded-2xl shadow-sm group hover:border-border transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-black font-serif text-text-primary group-hover:text-primary transition-colors">4</div>
                  <div className="text-[9px] font-bold text-text-secondary uppercase tracking-widest mt-1">Open Problems Solved</div>
                </div>
                <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-text-secondary" />
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface border border-border rounded-2xl shadow-sm group hover:border-border transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-black font-serif text-text-primary group-hover:text-primary transition-colors">12</div>
                  <div className="text-[9px] font-bold text-text-secondary uppercase tracking-widest mt-1">Total Co-Authors</div>
                </div>
                <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center">
                  <Network className="w-6 h-6 text-text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6 pb-2 border-b border-border">Recent Collaborators</h3>
          <div className="space-y-6">
            {[
              { name: 'Dr. Fatima Zahra', field: 'Neural Systems', avatar: '/avatar_elena.png' },
              { name: 'Hamza Tariq', field: 'Data Integrity', avatar: '/avatar_marcus.png' }
            ].map(collab => (
              <div key={collab.name} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border group-hover:border-primary/50 transition-colors shadow-sm">
                  <img src={collab.avatar} alt={collab.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{collab.name}</h4>
                  <p className="text-xs text-text-secondary">{collab.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6 pb-2 border-b border-border">Frequent Co-Authors</h3>
          <div className="space-y-6">
            {[
              { name: 'Fatima Nawaz', count: '12 Joint Papers', avatar: '/avatar_sarah.png' },
              { name: 'Dr. Ahmed Raza', count: '8 Joint Papers', avatar: '/avatar_aris.png' }
            ].map(author => (
              <div key={author.name} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border group-hover:border-primary/50 transition-colors shadow-sm">
                  <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{author.name}</h4>
                  <p className="text-xs text-text-secondary">{author.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Affiliations */}
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-6 pb-2 border-b border-border">Affiliations</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl shadow-sm">
               <div className="w-10 h-10 bg-surface-alt rounded-lg flex items-center justify-center border border-border font-black text-[10px] text-text-secondary shrink-0">ICA</div>
               <p className="text-xs font-bold text-text-secondary leading-snug">Institute for Cognitive Architecture</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl shadow-sm">
               <div className="w-10 h-10 bg-surface-alt rounded-lg flex items-center justify-center border border-border font-black text-[10px] text-text-secondary shrink-0">MIT</div>
               <p className="text-xs font-bold text-text-secondary leading-snug">Massachusetts Institute of Technology</p>
            </div>
          </div>
        </div>

      </aside>

    </div>
  </div>
);
};

export default ProfileDashboard;
