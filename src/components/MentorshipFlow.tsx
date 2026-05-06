import React from 'react';
import Link from 'next/link';

const conversations = [
  { id: 1, name: 'Elias Thorne', subject: 'Mentorship Request: Architecture', time: '2h', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facepad&face=2&w=256&h=256&q=80', active: true },
  { id: 2, name: 'Sarah K. Miller', subject: 'Re: Workshop Schedule', time: '5h', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facepad&face=2&w=256&h=256&q=80', active: false },
  { id: 3, name: 'David Vance', subject: 'Portfolio Feedback Needed', time: '1d', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facepad&face=2&w=256&h=256&q=80', active: false },
  { id: 4, name: 'Elena Rossi', subject: 'Invitation: Networking Night', time: '3d', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facepad&face=2&w=256&h=256&q=80', active: false },
];

const MentorshipFlow: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-80px)] flex border-t border-border bg-background animate-in fade-in duration-500">
      
      {/* Left Sidebar - Inbox List */}
      <aside className="w-80 border-r border-border shrink-0 flex flex-col bg-background">
        <div className="p-6 border-b border-border bg-surface">
          <h2 className="text-lg font-bold font-serif text-text-primary tracking-tight">Active Conversations</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              className={`p-6 border-b border-border cursor-pointer transition-all flex items-center gap-4 relative group ${
                conv.active ? 'bg-primary/5' : 'bg-surface hover:bg-primary/[0.02]'
              }`}
            >
              {conv.active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />}
              
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border shadow-sm">
                <img src={conv.avatar} alt={conv.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className={`text-sm truncate font-sans ${conv.active ? 'font-black text-text-primary' : 'font-bold text-text-secondary/80'}`}>{conv.name}</h4>
                  <span className="text-[9px] font-bold text-text-secondary/30 uppercase">{conv.time}</span>
                </div>
                <p className={`text-xs truncate ${conv.active ? 'text-text-secondary font-medium' : 'text-text-secondary/50'}`}>{conv.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content - Request Details */}
      <main className="flex-1 p-10 md:p-16 overflow-y-auto bg-background">
        <div className="max-w-3xl mx-auto">
          
          {/* Sender Profile Strip */}
          <div className="bg-surface border border-border rounded-2xl p-6 mb-10 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-background shadow-md">
                <img src={conversations[0].avatar} alt={conversations[0].name} className="w-full h-full object-cover" />
              </div>
              <div>
                <Link href={`/profile/${conversations[0].id}`}>
                  <h3 className="text-lg font-black text-text-primary hover:text-primary transition-colors cursor-pointer">{conversations[0].name}</h3>
                </Link>
                <p className="text-xs font-bold text-text-secondary/40 uppercase tracking-widest">Candidate for Mentorship • MIT</p>
              </div>
            </div>
            <button className="text-xs font-bold text-primary bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all active:scale-95">
              View Full Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-surface border border-border p-8 rounded-2xl shadow-soft">
              <h3 className="text-xs font-bold text-text-secondary mb-2">Experience Level</h3>
              <p className="text-2xl font-black text-text-primary">Beginner (0 Projects)</p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-2xl shadow-soft">
              <h3 className="text-xs font-bold text-text-secondary mb-2">Available Weekly Hours</h3>
              <p className="text-2xl font-black text-text-primary">8 Hours / Week</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xs font-bold text-text-secondary mb-4">Focus Areas</h3>
            <div className="flex flex-wrap gap-3">
              {['Digital Forensics', 'Penetration Testing', 'Malware Triage'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-secondary/5 text-text-secondary/70 border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xs font-bold text-text-secondary mb-4">Interest Statement</h3>
            <div className="bg-surface border border-border p-8 md:p-12 text-[17px] text-text-secondary leading-relaxed shadow-soft rounded-xl">
              I am seeking mentorship to refine my approach to automated forensic integrity. My current coursework covers basic artifact analysis, but I lack hands-on experience in detecting sophisticated anti-forensic techniques like timestomping in live environments. I want to learn how to build robust triage systems without compromising the integrity of volatile memory captures. I am prepared to commit eight hours weekly to rigorous review and practical application. I look forward to discussing how we might collaborate.
            </div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t border-border">
            <button className="px-10 py-3 border border-border text-text-secondary font-bold text-sm rounded-xl hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all active:scale-95">
              Decline
            </button>
            <button className="px-10 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
              Accept Request
            </button>
          </div>

        </div>
      </main>

    </div>
  );
};

export default MentorshipFlow;
