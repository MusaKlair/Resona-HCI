"use client";
import React from 'react';
import { ShieldCheck, Download, Link as LinkIcon, Network, ArrowLeft, Calendar, FileText, UserPlus, MessageSquare } from 'lucide-react';
import Link from 'next/link';

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
  }
];

const PublicProfile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-12 animate-in fade-in duration-500">
      
      {/* Breadcrumb / Back Link */}
      <Link 
        href="/matching" 
        className="group flex items-center gap-2 text-sm font-bold text-secondary/40 hover:text-secondary transition-all mb-8"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Matching Hub
      </Link>

      <section className="relative bg-white border border-secondary/10 rounded-t-[40px] overflow-hidden shadow-soft mb-12">
        {/* Professional Research Banner */}
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
          <div className="w-48 h-48 bg-white border-8 border-white rounded-full overflow-hidden shadow-2xl shrink-0">
             <img src="/avatar_sarah.png" alt="Dr. Arya Khan" className="w-full h-full object-cover scale-110" />
          </div>
          
          <div className="flex-1 pt-24 space-y-6">
            <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
              <div className="space-y-3">
                <h1 className="text-5xl font-black font-serif tracking-tight text-secondary flex items-center gap-3">
                  Dr. Arya Khan
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-sm font-bold text-secondary/50">Lead Researcher, Cognitive Architecture Institute</p>
                  <span className="hidden sm:block text-secondary/20">•</span>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                    orcid.org/0000-0002-1825-0097
                  </a>
                </div>
              </div>
              
              {/* Profile Actions - Public View */}
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none bg-primary text-white px-8 py-2.5 rounded-md font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95">
                  <UserPlus className="w-4 h-4" />
                  Connect
                </button>
                <button className="flex-1 sm:flex-none border border-secondary/10 text-secondary px-8 py-2.5 rounded-md font-bold text-sm hover:bg-secondary/5 transition-all flex items-center justify-center gap-2 active:scale-95">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Quantum Ethics', 'Neural Mapping', 'PyTorch', 'Open Science'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-secondary/5 border border-secondary/5 rounded-full text-[10px] font-black uppercase tracking-wider text-secondary/70">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl text-secondary/70 leading-relaxed max-w-3xl font-medium">
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
            <div className="p-8 bg-white border border-[#E5E7EB] rounded-[32px] shadow-soft flex items-center justify-between group transition-all">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">Current Standing</div>
                <div className="text-4xl font-black font-serif text-secondary mb-1">850</div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Top 2% Globally</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">Metric</div>
                <div className="text-sm font-bold text-secondary">Credibility Index</div>
                <div className="text-[10px] font-bold text-secondary/30 mt-1 italic">Verified</div>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-[#E5E7EB] rounded-[32px] shadow-soft flex items-center justify-between group transition-all">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">Academic Reach</div>
                <div className="text-4xl font-black font-serif text-secondary mb-1">14.2k</div>
                <div className="text-xs font-bold text-secondary/60 uppercase tracking-widest">Global Citations</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">Growth</div>
                <div className="text-sm font-bold text-primary">+12% YoY</div>
                <div className="text-[10px] font-bold text-secondary/30 mt-1 italic">Last 12 Months</div>
              </div>
            </div>
          </section>

          {/* Contribution Graph - Unified Card */}
          <section className="bg-white border border-[#E5E7EB] rounded-[32px] shadow-soft overflow-hidden">
            <div className="p-8 border-b border-secondary/10 flex items-center justify-between">
              <h2 className="text-xl font-black font-serif tracking-tight text-secondary">Contribution Graph</h2>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-secondary/20 text-secondary px-4 py-2 rounded-xl hover:bg-secondary/5 transition-colors">
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </div>
            
            <div className="p-8 relative group bg-white">
              {/* Summary Metrics */}
              <div className="mb-8">
                <div className="text-xl font-bold text-secondary tracking-tight">412 Contributions in the last year</div>
                <div className="text-xs text-secondary/40 font-medium">Includes publications, peer reviews, and problem-solving.</div>
              </div>

              {/* Heatmap Matrix */}
              <div className="w-full overflow-x-auto scrollbar-hide">
                  <div className="min-w-[600px]">
                    <div className="flex justify-between mb-3 text-[9px] font-black text-secondary/20 uppercase tracking-[0.2em] px-1">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                        <div key={month}>{month}</div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <div className="flex flex-col gap-[3px] text-[9px] font-bold text-secondary/30 mt-[2px]">
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
                              const level = Math.floor(Math.random() * 4);
                              const colors = [
                                'bg-[#F3F4F6]',
                                'bg-primary/20',
                                'bg-primary/60',
                                'bg-primary'
                              ];
                              
                              return (
                                <div 
                                  key={`${week}-${day}`} 
                                  className={`flex-1 aspect-square min-w-[4px] rounded-[1.5px] ${colors[level]} transition-all hover:scale-150 hover:z-10 cursor-pointer relative group/cell`}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-3 mt-8">
                <span className="text-[9px] font-black text-secondary/30 uppercase tracking-widest">Less Activity</span>
                <div className="flex gap-[3px]">
                  <div className="w-3 h-3 rounded-[1.5px] bg-[#F3F4F6]" />
                  <div className="w-3 h-3 rounded-[1.5px] bg-primary/20" />
                  <div className="w-3 h-3 rounded-[1.5px] bg-primary/60" />
                  <div className="w-3 h-3 rounded-[1.5px] bg-primary" />
                </div>
                <span className="text-[9px] font-black text-secondary/30 uppercase tracking-widest">More</span>
              </div>
            </div>
          </section>

          {/* Managed Content - Public View */}
          <section>
            <div className="border-b border-secondary/10 pb-4 mb-8">
              <h2 className="text-xl font-black font-serif tracking-tight text-secondary">Public Research & Contributions</h2>
            </div>

            <div className="space-y-6">
              {managedContent.map(item => (
                <div key={item.id} className="bg-white border border-secondary/10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 rounded-3xl hover:shadow-soft transition-all group">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold font-serif text-secondary group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                    <p className="text-sm text-secondary/60 leading-relaxed max-w-3xl">{item.desc}</p>
                  </div>
                  
                  <div className="shrink-0">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-secondary/10 text-secondary/60 px-5 py-2.5 rounded-xl hover:bg-secondary/5 hover:text-secondary transition-all">
                      <FileText className="w-4 h-4" /> View Paper
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar - Academic Authority Hub */}
        <aside className="lg:col-span-4 space-y-12 lg:pl-12 lg:border-l border-secondary/10">
          
          {/* Impact Metrics */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-6 pb-2 border-b border-secondary/10">Collaboration Impact</h3>
            <div className="space-y-4">
              <div className="p-5 bg-white border border-secondary/10 rounded-2xl shadow-sm group hover:border-secondary/30 transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black font-serif text-secondary group-hover:text-primary transition-colors">4</div>
                    <div className="text-[9px] font-bold text-secondary/40 uppercase tracking-widest mt-1">Open Problems Solved</div>
                  </div>
                  <div className="w-10 h-10 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white border border-secondary/10 rounded-2xl shadow-sm group hover:border-secondary/30 transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-black font-serif text-secondary group-hover:text-primary transition-colors">12</div>
                    <div className="text-[9px] font-bold text-secondary/40 uppercase tracking-widest mt-1">Total Co-Authors</div>
                  </div>
                  <div className="w-10 h-10 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary/30">
                    <Network className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Affiliations */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-6 pb-2 border-b border-secondary/10">Affiliations</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-secondary/5 rounded-2xl shadow-sm">
                 <div className="w-10 h-10 bg-secondary/[0.03] rounded-lg flex items-center justify-center border border-secondary/5 font-black text-[10px] text-secondary/40 shrink-0">ICA</div>
                 <p className="text-xs font-bold text-secondary/80 leading-snug">Institute for Cognitive Architecture</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-secondary/5 rounded-2xl shadow-sm">
                 <div className="w-10 h-10 bg-secondary/[0.03] rounded-lg flex items-center justify-center border border-secondary/5 font-black text-[10px] text-secondary/40 shrink-0">MIT</div>
                 <p className="text-xs font-bold text-secondary/80 leading-snug">Massachusetts Institute of Technology</p>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default PublicProfile;
