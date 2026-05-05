"use client";
import React, { useState } from 'react';

const conversations = [
  { id: 1, name: 'Elias Thorne', subject: 'Mentorship Request: Architecture', active: true },
  { id: 2, name: 'Sarah K. Miller', subject: 'Re: Workshop Schedule', active: false },
  { id: 3, name: 'David Vance', subject: 'Portfolio Feedback Needed', active: false },
  { id: 4, name: 'Elena Rossi', subject: 'Invitation: Networking Night', active: false },
];

const MentorshipFlow: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-100px)] flex border-t border-secondary/10 bg-white animate-in fade-in duration-500">
      
      {/* Left Sidebar - Inbox List */}
      <aside className="w-80 border-r border-secondary/10 shrink-0 flex flex-col">
        <div className="p-6 border-b border-secondary/10">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-secondary/50">Active Conversations</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              className={`p-6 border-b border-secondary/5 cursor-pointer transition-colors flex items-center gap-4 ${
                conv.active ? 'bg-primary/5 border-l-4 border-l-primary' : 'hover:bg-secondary/[0.02] border-l-4 border-l-transparent'
              }`}
            >
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-secondary/60 font-bold text-sm">{conv.name.charAt(0)}</span>
              </div>
              <div className="overflow-hidden">
                <h4 className={`text-sm truncate ${conv.active ? 'font-black' : 'font-bold'}`}>{conv.name}</h4>
                <p className="text-xs text-secondary/60 truncate mt-1">{conv.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content - Request Details */}
      <main className="flex-1 p-10 md:p-16 overflow-y-auto">
        <div className="max-w-3xl">
          
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1 border-b border-secondary/10 pb-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-2">Experience Level</h3>
              <p className="text-xl font-bold font-serif">Beginner (0 Projects)</p>
            </div>
            <div className="flex-1 border-b border-secondary/10 pb-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-2">Available Weekly Hours</h3>
              <p className="text-xl font-bold font-serif">8 Hours / Week</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-4">Focus Areas</h3>
            <div className="flex gap-4">
              {['Digital Forensics', 'Penetration Testing', 'Malware Triage'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/50 mb-4">Interest Statement</h3>
            <div className="border border-secondary/10 p-8 md:p-12 text-lg text-secondary/80 leading-relaxed shadow-sm">
              I am seeking mentorship to refine my approach to automated forensic integrity. My current coursework covers basic artifact analysis, but I lack hands-on experience in detecting sophisticated anti-forensic techniques like timestomping in live environments. I want to learn how to build robust triage systems without compromising the integrity of volatile memory captures. I am prepared to commit eight hours weekly to rigorous review and practical application. I look forward to discussing how we might collaborate.
            </div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t border-secondary/10">
            <button className="px-10 py-3 border border-secondary/20 text-secondary font-bold text-sm rounded-md hover:bg-secondary/5 transition-colors">
              Decline
            </button>
            <button className="px-10 py-3 bg-primary text-white font-bold text-sm rounded-md hover:bg-primary/90 transition-colors shadow-sm">
              Accept Request
            </button>
          </div>

        </div>
      </main>

    </div>
  );
};

export default MentorshipFlow;
