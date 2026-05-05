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
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500">
      
      {/* Main Content Column */}
      <div className="lg:col-span-8 space-y-16">
        
        {/* Profile Header */}
        <section className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-48 bg-secondary/5 border-2 border-secondary/10 rounded-full flex items-center justify-center shrink-0">
             <span className="text-secondary/30 font-black text-4xl">AK</span>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-black font-serif uppercase tracking-tight flex items-center gap-3">
                  Dr. Arya Khan
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </h1>
                <a href="#" className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-secondary/5 rounded-md text-xs font-bold text-secondary/60 hover:text-secondary transition-colors">
                  <LinkIcon className="w-3 h-3" /> orcid.org/0000-0002-1825-0097
                </a>
              </div>
              
              <div className="text-center p-4 bg-white border-2 border-secondary rounded-xl shadow-[4px_4px_0px_rgba(27,27,27,1)]">
                <div className="text-5xl font-black font-serif leading-none text-secondary">850</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mt-2">Credibility Index</div>
                <div className="text-xs font-bold text-primary mt-1">TOP 2% GLOBALLY</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['QUANTUM ETHICS', 'NEURAL MAPPING', 'PYTORCH', 'OPEN SCIENCE'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary/70">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-secondary/80 leading-relaxed max-w-2xl">
              Lead Researcher at the Institute for Cognitive Architecture. Specializing in the intersection of biological neural paths and synthetic decision-making frameworks.
            </p>
          </div>
        </section>

        {/* Contribution Graph */}
        <section>
          <div className="flex items-center justify-between border-b-4 border-secondary pb-4 mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">Contribution Graph</h2>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-secondary/20 text-secondary px-4 py-2 rounded-md hover:bg-secondary/5 transition-colors">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>
          
          <div className="bg-white border-2 border-secondary/10 rounded-2xl p-8 h-80 relative overflow-hidden group">
            {/* Mock Graph Visualization */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="absolute top-8 left-8 bg-white border border-secondary/10 p-3 rounded shadow-sm z-10">
              <div className="text-[8px] font-mono text-secondary/60">SYS_REF: NODE_CLUSTER_041</div>
              <div className="text-[8px] font-mono text-secondary/60">ACTIVE_NODES: 1,402</div>
              <div className="text-[8px] font-mono text-primary">INTEGRITY: 99.4%</div>
            </div>

            {/* SVG Graph Mockup */}
            <svg className="w-full h-full absolute inset-0 z-0" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice">
              <path d="M 200 150 L 400 200 L 600 120 L 750 180" fill="none" stroke="#1B1B1B" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
              <path d="M 400 200 L 500 280" fill="none" stroke="#1B1B1B" strokeWidth="2" className="opacity-30" />
              <circle cx="200" cy="150" r="8" fill="#1B1B1B" />
              <circle cx="400" cy="200" r="14" fill="#1B1B1B" />
              <circle cx="600" cy="120" r="10" fill="#1B1B1B" />
              <circle cx="750" cy="180" r="6" fill="#1B1B1B" />
              <circle cx="500" cy="280" r="6" fill="#1B1B1B" />
              <ellipse cx="480" cy="210" rx="20" ry="8" fill="#EE7052" className="opacity-20" />
            </svg>
          </div>
        </section>

        {/* Managed Content */}
        <section>
          <div className="border-b-4 border-secondary pb-4 mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">Managed Content & Publications</h2>
          </div>

          <div className="space-y-4">
            {managedContent.map(item => (
              <div key={item.id} className="bg-white border-2 border-secondary/10 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-xl hover:border-secondary/30 transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-serif mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary/60">{item.desc}</p>
                </div>
                
                <div className="flex border-2 border-secondary rounded-lg overflow-hidden shrink-0">
                  {['PUBLIC', 'VERIFIED', 'PRIVATE'].map(priv => (
                    <button 
                      key={priv}
                      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${
                        item.privacy === priv 
                          ? 'bg-primary text-white' 
                          : 'bg-white text-secondary hover:bg-secondary/5'
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

      {/* Right Sidebar */}
      <aside className="lg:col-span-4 space-y-12 lg:pl-8 lg:border-l border-secondary/10">
        
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-6 pb-2 border-b border-secondary/10">Recent Collaborators</h3>
          <div className="space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center shrink-0 border border-secondary/10 group-hover:border-primary/50 transition-colors">
                  <span className="text-[12px] font-bold text-secondary/40">FZ</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Fatima Zahra, PhD</h4>
                  <p className="text-xs text-secondary/60">Neural Systems</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-6 pb-2 border-b border-secondary/10">Co-Authors</h3>
          <div className="space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center shrink-0 border border-secondary/10 group-hover:border-primary/50 transition-colors">
                  <span className="text-[12px] font-bold text-secondary/40">SJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Sarah Jenkins</h4>
                  <p className="text-xs text-secondary/60">12 Joint Papers</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </aside>

    </div>
  );
};

export default ProfileDashboard;
