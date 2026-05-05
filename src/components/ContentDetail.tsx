"use client";
import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

interface ContentDetailProps {
  onBack: () => void;
}

const ContentDetail: React.FC<ContentDetailProps> = ({ onBack }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white">
      
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary/50 hover:text-secondary transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Feed
      </button>

      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-black font-serif uppercase tracking-tight leading-[1.1] mb-8">
          TraceHunter:<br/>
          Automated Forensic<br/>
          Integrity & Malware<br/>
          Triage System
        </h1>

        <div className="flex flex-wrap gap-8 mb-8">
          {[
            { name: 'Basil Saleem', status: 'VERIFIED RESEARCHER' },
            { name: 'Hasnat Ahmed', status: 'VERIFIED RESEARCHER' }
          ].map(author => (
            <div key={author.name} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/5 rounded-full border border-secondary/10 flex items-center justify-center relative">
                <span className="font-bold text-secondary/40 text-xs">{author.name.charAt(0)}</span>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm flex items-center gap-1">
                  {author.name}
                </h4>
                <p className="text-[10px] font-bold tracking-widest uppercase text-secondary/50">{author.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {['DIGITAL FORENSICS', 'INCIDENT RESPONSE', 'MALWARE ANALYSIS'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold tracking-wider uppercase text-secondary/70">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-12 relative">
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-8 bg-secondary" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Plain-Language Summary</h3>
        </div>

        <div className="p-8 md:p-12 bg-secondary/5 rounded-3xl relative">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary rounded-l-3xl" />
          <p className="text-lg leading-relaxed font-medium text-secondary/80">
            Current incident response workflows struggle to detect sophisticated anti-forensic techniques, such as timestomping, during live system analysis. This paper introduces TraceHunter, an automated triage pipeline designed to analyze volatile memory captures without compromising evidence integrity. By automating artifact extraction, this system allows entry-level analysts to quickly identify manipulated file timestamps and hidden malware payloads, significantly reducing the time required to secure a compromised network.
          </p>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-6 bg-primary text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors duration-500 rounded-md shadow-sm"
        >
          {isExpanded ? (
            <>Read Less: Hide Technical Content <ChevronUp className="w-5 h-5" /></>
          ) : (
            <>Read More: View Full Technical Content <ChevronDown className="w-5 h-5" /></>
          )}
        </button>

        {/* Expanded Content Area */}
        {isExpanded && (
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-black animate-in fade-in slide-in-from-top-8 duration-700">
            <h3>1. Introduction</h3>
            <p>
              The proliferation of advanced persistent threats (APTs) has necessitated a paradigm shift in how digital forensics and incident response (DFIR) teams conduct live triage. Traditional disk-based forensics often falls short against fileless malware and in-memory execution techniques.
            </p>
            <p>
              TraceHunter aims to bridge this gap by providing an automated memory forensics framework that operates natively within restricted execution environments...
            </p>
            
            <h3>2. Methodology</h3>
            <p>
              Our approach leverages a hypervisor-level introspection technique to dump the memory pages of targeted processes without triggering standard user-mode hooks...
            </p>
            
            <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 my-8">
               <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Figure 1: TraceHunter Pipeline</h4>
               <div className="aspect-video bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/20">
                 <span className="text-secondary/40 font-bold">Architecture Diagram Placeholder</span>
               </div>
            </div>

            <h3>3. Results and Benchmarks</h3>
            <p>
              In our experimental setup, TraceHunter identified 94% of timestomping anomalies within a 16GB memory capture in under 120 seconds...
            </p>
          </div>
        )}

        {!isExpanded && (
          <div className="space-y-4 opacity-10 pointer-events-none select-none blur-sm transition-all duration-1000">
             <div className="h-10 bg-secondary w-full" />
             <div className="h-10 bg-secondary w-3/4" />
             <div className="h-10 bg-secondary w-5/6" />
          </div>
        )}
      </div>

    </div>
  );
};

export default ContentDetail;
