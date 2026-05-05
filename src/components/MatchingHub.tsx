"use client";
import React from 'react';
import { Network, CheckCircle2 } from 'lucide-react';

const matchProfiles = [
  {
    id: 1,
    name: 'Dr. Alice Chen',
    title: 'Senior Researcher',
    institution: 'TechCorp Institute',
    role: 'MENTOR',
    alignment: 'High correlation in Natural Language Processing research methodologies. Shared history of deploying transformer models in low-resource environments.',
    matchScore: 92,
  },
  {
    id: 2,
    name: 'Marcus Vance',
    title: 'Postdoctoral Fellow',
    institution: 'Nexus Labs',
    role: 'PEER COLLABORATOR',
    alignment: 'Complementary skill set identified. Strong background in Data Engineering pipelines required for your active Problem Statement 4A.',
    matchScore: 88,
  },
  {
    id: 3,
    name: 'Prof. Julian Thorne',
    title: 'Principal Engineer',
    institution: 'Quantum AI Research',
    role: 'MENTEE',
    alignment: 'Looking for guidance in scaling distributed systems. Your recent publication on high-throughput architecture perfectly matches his learning objectives.',
    matchScore: 85,
  },
  {
    id: 4,
    name: 'Elena Rostova',
    title: 'Cognitive Science Dept.',
    institution: 'Stanford University',
    role: 'PEER COLLABORATOR',
    alignment: 'Intersecting research vectors in human-computer interaction. Mutual citations found in last 3 papers.',
    matchScore: 79,
  }
];

const recentProfiles = [
  { id: 1, name: 'Elena Rostova', title: 'Cognitive Science Dept.' },
  { id: 2, name: 'Julian Thorne', title: 'Principal Engineer' },
  { id: 3, name: 'Sarah Jenkins', title: 'Venture Analyst' },
];

const MatchingHub: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-background">
      
      {/* Left Filters Sidebar */}
      <aside className="lg:col-span-2 border-r border-secondary/5 bg-secondary/[0.02] p-8 space-y-10">
        <div>
          <h2 className="font-black font-serif text-lg tracking-tight mb-8">FILTERS</h2>
          
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Role</h3>
            {['Mentor', 'Mentee', 'Peer Collaborator'].map(role => (
              <label key={role} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${role === 'Mentee' ? 'bg-secondary border-secondary text-white' : 'border-secondary/20 group-hover:border-secondary/50'}`}>
                  {role === 'Mentee' && <CheckCircle2 className="w-3 h-3" />}
                </div>
                <span className="text-sm font-semibold">{role}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Experience Level</h3>
          {['Entry Level', 'Mid-Level', 'Senior / Expert'].map(level => (
            <label key={level} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${level === 'Mid-Level' ? 'bg-secondary border-secondary text-white' : 'border-secondary/20 group-hover:border-secondary/50'}`}>
                {level === 'Mid-Level' && <CheckCircle2 className="w-3 h-3" />}
              </div>
              <span className="text-sm font-semibold">{level}</span>
            </label>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Institution</h3>
          <input 
            type="text" 
            placeholder="Search institutions..." 
            className="w-full text-sm p-3 rounded-lg border border-secondary/10 bg-white outline-none focus:border-primary/30"
          />
          {['Stanford University', 'MIT'].map(inst => (
            <label key={inst} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-secondary/20 group-hover:border-secondary/50 transition-colors" />
              <span className="text-sm font-semibold">{inst}</span>
            </label>
          ))}
        </div>

        <button className="w-full py-3 border border-secondary/20 text-secondary font-bold text-sm rounded-md hover:bg-secondary/5 transition-colors">
          APPLY FILTERS
        </button>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-7 p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="mb-12">
          <h1 className="text-4xl font-black font-serif uppercase tracking-tight mb-2">Intelligent Match Hub</h1>
          <p className="text-secondary/60">Curated connections based on structural data alignment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {matchProfiles.map(profile => (
            <div key={profile.id} className="card-premium !p-0 flex flex-col overflow-hidden bg-white">
              <div className="p-8 text-center flex-1">
                <h3 className="text-xl font-bold font-serif mb-1">{profile.name}</h3>
                <p className="text-sm text-secondary/60 mb-4">{profile.title},<br/>{profile.institution}</p>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70 mb-6">
                  {profile.role}
                </span>

                <div className="bg-secondary/5 p-6 rounded-xl text-left relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-xl" />
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Network className="w-3 h-3" />
                      Structural Alignment
                    </h4>
                    <span className="text-xs font-bold text-primary">{profile.matchScore}% Match</span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary/80" dangerouslySetInnerHTML={{
                    __html: profile.alignment.replace(/Natural Language Processing|Data Engineering pipelines/g, match => `<strong>${match}</strong>`)
                  }} />
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-secondary/10">
                <button className="py-5 text-sm font-bold tracking-widest uppercase hover:bg-secondary/5 transition-colors">
                  Dismiss
                </button>
                <button className="py-5 text-sm font-bold tracking-widest uppercase bg-primary text-white hover:bg-primary/90 transition-colors">
                  Initiate Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="lg:col-span-3 border-l border-secondary/5 bg-secondary/[0.02] p-8">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-8">Recently Viewed Profiles</h3>
        
        <div className="space-y-8 mb-12">
          {recentProfiles.map(profile => (
            <div key={profile.id} className="group cursor-pointer">
              <h4 className="text-sm font-bold group-hover:text-primary transition-colors">{profile.name}</h4>
              <p className="text-xs text-secondary/50">{profile.title}</p>
            </div>
          ))}
        </div>

        <button className="w-full py-4 border-t border-secondary/10 text-[10px] font-bold uppercase tracking-widest text-secondary/40 hover:text-secondary transition-colors">
          Clear History
        </button>
      </aside>

    </div>
  );
};

export default MatchingHub;
