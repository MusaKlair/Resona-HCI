"use client";
import React from 'react';
import { ArrowLeft, Share2, Bookmark, MessageSquare, ThumbsUp, Download, Eye, Calendar, User, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const PublicationDetail: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('Abstract');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-10 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (70%) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Back Link */}
          <Link 
            href="/home" 
            className="group flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Feed
          </Link>

          {/* Match Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/5 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Matches 4 of your skills</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black font-serif text-text-primary leading-[1.1] tracking-tight">
            Synthesis of Novel Carbon Nanotube Arrays for High-Efficiency Energy Storage
          </h1>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-elevated border border-border">
            <img 
              src="/post_nanotube.png" 
              alt="Synthesis of Novel Carbon Nanotube Arrays" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
          </div>

          {/* Author & Meta Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-10">
            {/* Authors */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facepad&face=2&w=256&h=256&q=80" alt="Dr. Ahmed Raza" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-base font-black text-text-primary">Dr. Ahmed Raza</p>
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Stanford University</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facepad&face=2&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facepad&face=2&w=256&h=256&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facepad&face=2&w=256&h=256&q=80"
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-surface-alt">
                      <img src={src} alt="co-author" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className="text-[10px] font-black text-text-secondary hover:text-text-primary uppercase tracking-widest transition-colors">
                  +3 others
                </button>
              </div>
            </div>

            {/* Publication Details */}
            <div className="flex items-center gap-4">
              <div className="text-[9px] font-black text-text-secondary uppercase tracking-[0.2em] flex flex-wrap items-center gap-y-2">
                <span>Published: Oct 12, 2024</span>
                <span className="mx-2 opacity-20 hidden md:inline">•</span>
                <span>DOI: 10.1038/s41586-024-0000-0</span>
                <span className="mx-2 opacity-20 hidden md:inline">•</span>
                <span className="text-text-secondary">Materials Science</span>
              </div>
              <span className="px-3 py-1 bg-surface-alt text-text-secondary text-[9px] font-black uppercase tracking-widest rounded border border-border whitespace-nowrap">
                Publication
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-8 border-b border-border pb-px overflow-x-auto scrollbar-hide">
            {['Abstract', 'Full Text', 'Methodology', 'Data & Figures', 'References'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${
                  activeTab === tab ? 'text-text-primary' : 'text-text-secondary hover:text-text-secondary'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full animate-in slide-in-from-left-1 duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Main Content Body */}
          <div className="pt-4 pb-12">
            {activeTab === 'Abstract' ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-500">
                <p className="text-[17px] text-slate-700 leading-relaxed font-normal font-sans">
                  We present a reproducible method for synthesizing highly ordered carbon nanotube arrays, demonstrating a 40% increase in specific capacitance compared to traditional random networks. This structural consistency opens new pathways for supercapacitor design and high-density energy storage applications. 
                </p>
                <p className="text-[17px] text-slate-700 leading-relaxed font-normal font-sans">
                  By utilizing a controlled chemical vapor deposition process on a precision-patterned catalyst bed, we achieve unprecedented alignment and density parameters. The resulting arrays exhibit exceptional thermal and electrical conductivity, making them ideal candidates for the next generation of energy harvesting devices. Our findings suggest that the architecture of the array is just as critical as the material composition in achieving peak performance metrics.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-surface-alt rounded-[32px] border border-dashed border-border">
                <BookOpen className="w-12 h-12 text-text-secondary mb-4" />
                <p className="text-sm font-bold text-text-secondary uppercase tracking-widest">Section content loading...</p>
              </div>
            )}
          </div>

          {/* Discussion Layer */}
          <div className="pt-12 border-t border-border space-y-10">
            <h2 className="text-3xl font-black font-serif text-text-primary">Peer Review & Discussion</h2>

            {/* Input Omnibar */}
            <div className="bg-surface border border-border rounded-[32px] p-6 shadow-soft flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0">
                <img src="/avatar_aris.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Ask a question or provide peer feedback..."
                  className="w-full bg-surface-alt border border-transparent focus:border-border rounded-2xl px-6 py-3.5 text-sm font-medium outline-none transition-all"
                />
              </div>
              <button className="bg-primary text-white px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all shadow-md shadow-primary/20">
                Post
              </button>
            </div>

            {/* Thread */}
            <div className="space-y-6 pb-20">
              <div className="bg-surface-alt border border-border rounded-[32px] p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface-alt flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facepad&face=2&w=256&h=256&q=80" alt="Dr. Hamza Tariq" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Dr. Hamza Tariq</p>
                      <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">MIT • 4h ago</p>
                    </div>
                  </div>
                  <button className="text-text-secondary hover:text-text-primary transition-colors">⋮</button>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  Have you observed any degradation in cycle stability beyond 500 cycles? In our recent trials with CVD nanotube arrays, we noticed a sharp drop-off when the patterned catalyst wasn't uniform at the atomic scale. 
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> 12
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> Reply
                  </button>
                </div>
              </div>

              <div className="bg-surface-alt border border-border rounded-[32px] p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface-alt flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facepad&face=2&w=256&h=256&q=80" alt="Fatima Nawaz" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Fatima Nawaz</p>
                      <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Oxford Materials • 8h ago</p>
                    </div>
                  </div>
                  <button className="text-text-secondary hover:text-text-primary transition-colors">⋮</button>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  The methodology section on CVD parameters is exceptionally detailed. This will be very helpful for our upcoming replication study on high-efficiency arrays.
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> 4
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-primary transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" /> Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-20 space-y-8">
            {/* Action Card */}
            <div className="bg-surface border border-border rounded-[32px] p-8 shadow-soft space-y-6">
              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-95">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="w-full border-2 border-border text-text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-surface-alt transition-all flex items-center justify-center gap-3 active:scale-95">
                  <BookOpen className="w-4 h-4" />
                  Cite Publication
                </button>
              </div>

              <div className="flex justify-between gap-4 pt-4 border-t border-border">
                <button className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 rounded-2xl bg-surface-alt flex items-center justify-center text-text-secondary group-hover:bg-surface-alt group-hover:text-text-primary transition-all active:scale-95">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Endorse</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 rounded-2xl bg-surface-alt flex items-center justify-center text-text-secondary group-hover:bg-surface-alt group-hover:text-text-primary transition-all active:scale-95">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Save</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 rounded-2xl bg-surface-alt flex items-center justify-center text-text-secondary group-hover:bg-surface-alt group-hover:text-text-primary transition-all active:scale-95">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Share</span>
                </button>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="bg-surface border border-border rounded-[32px] p-8 shadow-soft space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Impact Metrics</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-text-secondary">Recommendations</span>
                  <span className="text-3xl font-black font-serif text-text-primary">142</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <span className="text-sm font-bold text-text-secondary">Citations</span>
                  <span className="text-3xl font-black font-serif text-text-primary">28</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <span className="text-sm font-bold text-text-secondary">Researchers Saved</span>
                  <span className="text-3xl font-black font-serif text-text-primary">8</span>
                </div>
              </div>
            </div>

            {/* Match Analysis */}
            <div className="bg-primary/[0.03] border border-primary/10 rounded-[32px] p-8 space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Why you matched</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Nanotechnology', 'Supercapacitors', 'Energy Storage', 'Materials Science'].map(skill => (
                  <button key={skill} className="px-3 py-1.5 bg-surface border border-primary/10 rounded-full text-[10px] font-bold text-primary hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm shadow-primary/5">
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Meta Data Card (Original simplified or removed if redundant) */}
            <div className="bg-surface-alt border border-border rounded-[32px] p-8 space-y-4">
               <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-text-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Verified May 2024</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Peer Reviewed Access</span>
               </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default PublicationDetail;
