"use client";
import React from 'react';
import { Search, Bookmark, X, ChevronDown, CheckCircle2, Users, Target, Network, ChevronUp, Clock, School, Briefcase, BarChart, Check, Square } from 'lucide-react';

const initialMatchProfiles = [
  {
    id: 1,
    name: 'Dr. Alice Chen',
    avatar: '/avatar_aris.png',
    title: 'Senior Researcher',
    institution: 'TechCorp Institute',
    role: 'MENTOR',
    alignment: 'High correlation in Natural Language Processing research methodologies. Shared history of deploying transformer models.',
    matchScore: 92,
    tags: ['NLP', 'Transformers', 'Deployment'],
    mutualConnections: 12,
    affiliation: 'MIT',
    status: 'Available for new projects',
    lastActive: '2h ago',
    isVerified: true
  },
  {
    id: 2,
    name: 'Marcus Vance',
    avatar: '/avatar_marcus.png',
    title: 'Postdoctoral Fellow',
    institution: 'Nexus Labs',
    role: 'PEER COLLABORATOR',
    alignment: 'Complementary skill set identified. Strong background in Data Engineering pipelines required for your active Problem Statement 4A.',
    matchScore: 88,
    tags: ['Data Pipelines', 'ETL', 'System Design'],
    mutualConnections: 4,
    affiliation: 'Stanford',
    status: 'Active recently',
    lastActive: '5m ago',
    isVerified: false
  },
  {
    id: 3,
    name: 'Prof. Julian Thorne',
    avatar: '/avatar_elena.png',
    title: 'Principal Engineer',
    institution: 'Quantum AI Research',
    role: 'MENTEE',
    alignment: 'Looking for guidance in scaling distributed systems. Your recent publication on high-throughput architecture matches his objectives.',
    matchScore: 85,
    tags: ['Distributed Systems', 'Architecture'],
    mutualConnections: 21,
    affiliation: 'Harvard',
    status: 'Available',
    lastActive: '1d ago',
    isVerified: true
  },
  {
    id: 4,
    name: 'Elena Rostova',
    avatar: '/avatar_sarah.png',
    title: 'Cognitive Science Dept.',
    institution: 'Stanford University',
    role: 'PEER COLLABORATOR',
    alignment: 'Intersecting research vectors in human-computer interaction. Mutual citations found in last 3 papers.',
    matchScore: 79,
    tags: ['HCI', 'UX Research', 'Cognitive Science'],
    mutualConnections: 8,
    affiliation: 'Stanford',
    status: 'Active recently',
    lastActive: '3h ago',
    isVerified: true
  }
];

const recentProfiles = [
  { id: 1, name: 'Elena Rostova', title: 'Cognitive Science Dept.', avatar: '/avatar_elena.png' },
  { id: 2, name: 'Marcus Chen', title: 'Data Scientist', avatar: '/avatar_marcus.png' },
  { id: 3, name: 'Sarah Jenkins', title: 'Robotics Engineer', avatar: '/avatar_sarah.png' },
];

const MatchingHub: React.FC = () => {
  const [profiles, setProfiles] = React.useState(initialMatchProfiles);
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());
  const [showAllSections, setShowAllSections] = React.useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = React.useState<string[]>(['Mentee', 'Stanford University']);
  const [matchType, setMatchType] = React.useState<'similar' | 'complementary'>('similar');
  const [bookmarkedIds, setBookmarkedIds] = React.useState<Set<number>>(new Set());
  const [sentRequestIds, setSentRequestIds] = React.useState<Set<number>>(new Set());
  const [toast, setToast] = React.useState<{ show: boolean, message: string }>({ show: false, message: '' });

  const showFeedback = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const toggleShowAll = (section: string) => {
    setShowAllSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      if (prev.includes(filter)) return prev.filter(f => f !== filter);
      return [...prev, filter];
    });
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        showFeedback('Profile added to shortlist');
      }
      return next;
    });
  };

  const handleClearHistory = () => {
    showFeedback('Viewing history cleared');
  };

  const handleConnect = (id: number, name: string) => {
    setSentRequestIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    showFeedback(`Request sent to ${name}`);
  };

  const handleDismiss = (id: number) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    showFeedback('Match removed from feed');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Filters Sidebar */}
      <aside className="lg:col-span-2 space-y-6 sticky top-28 self-start">
        <h2 className="font-black font-serif text-lg tracking-tight">Feed Filters</h2>

        <nav className="flex flex-col gap-1">
        {/* Role Type Section */}
        <div>
          <button 
            onClick={() => toggleSection('Role Type')}
            className="w-full flex items-center justify-between px-1 py-2.5 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-secondary/80" style={{fontFamily: 'var(--font-sans)'}}>Role Type</span>
            </div>
            {expandedSections.has('Role Type') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Role Type') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {[
                { name: 'Mentor', icon: <Users className="w-4 h-4 text-primary" /> },
                { name: 'Mentee', icon: <Target className="w-4 h-4 text-primary" /> },
                { name: 'Peer', icon: <Network className="w-4 h-4 text-primary" /> }
              ].map(role => (
                <button 
                  key={role.name}
                  onClick={() => toggleFilter(role.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(role.name) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {role.icon}
                    {role.name}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(role.name) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(role.name) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div>
          <button 
            onClick={() => toggleSection('Experience')}
            className="w-full flex items-center justify-between px-1 py-2.5 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <BarChart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-secondary/80" style={{fontFamily: 'var(--font-sans)'}}>Experience</span>
            </div>
            {expandedSections.has('Experience') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Experience') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {[
                { name: 'Entry', icon: <Briefcase className="w-4 h-4 text-primary" /> },
                { name: 'Mid-Level', icon: <BarChart className="w-4 h-4 text-primary" /> },
                { name: 'Senior', icon: <Target className="w-4 h-4 text-primary" /> }
              ].map(level => (
                <button 
                  key={level.name}
                  onClick={() => toggleFilter(level.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(level.name) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {level.icon}
                    {level.name}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(level.name) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(level.name) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Institution Section */}
        <div>
          <button 
            onClick={() => toggleSection('Institution')}
            className="w-full flex items-center justify-between px-1 py-2.5 group text-secondary/60 hover:text-secondary transition-all"
          >
            <div className="flex items-center gap-3">
              <School className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-secondary/80" style={{fontFamily: 'var(--font-sans)'}}>Institution</span>
            </div>
            {expandedSections.has('Institution') ? <ChevronUp className="w-4 h-4 transition-colors" /> : <ChevronDown className="w-4 h-4 transition-colors" />}
          </button>
          
          {expandedSections.has('Institution') && (
            <div className="space-y-1 mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="relative mb-4 px-2 mt-2">
                <Search className="w-3.5 h-3.5 text-secondary/30 absolute left-5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-secondary/10 bg-secondary/[0.02] outline-none focus:bg-white focus:border-primary/30 transition-all"
                />
              </div>
              {['Stanford', 'MIT', 'Harvard', 'Oxford', 'TechCorp'].slice(0, showAllSections.has('Institution') ? 10 : 4).map(inst => (
                <button 
                  key={inst}
                  onClick={() => toggleFilter(inst)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                    activeFilters.includes(inst) ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <School className="w-4 h-4 text-primary" />
                    {inst}
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${activeFilters.includes(inst) ? 'bg-primary border-primary' : 'border-secondary/20'}`}>
                    {activeFilters.includes(inst) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
              <button 
                onClick={() => toggleShowAll('Institution')}
                className="w-full text-left px-4 mt-2 text-[10px] font-bold text-secondary/40 hover:text-secondary transition-colors"
              >
                {showAllSections.has('Institution') ? '- See less' : '+ See all'}
              </button>
            </div>
          )}
        </div>
        </nav>

      </aside>

      {/* Main Content */}
      <main className="lg:col-span-7 p-8 md:p-12 animate-in fade-in duration-700">
        <div className="mb-8">
          <h1 className="text-3xl font-black font-serif tracking-tight text-secondary mb-2 uppercase">Intelligent Match Hub</h1>
          <p className="text-sm text-secondary/50 font-semibold tracking-wide">Discover and connect with your perfect academic match.</p>
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
              placeholder="Search skills, methodologies, or research vectors..." 
              className="flex-1 bg-transparent text-sm px-4 outline-none placeholder:text-secondary/30 font-medium h-12"
            />
            <div className="flex items-center p-1 bg-secondary/5 rounded-xl ml-2 border border-secondary/5">
              <button 
                onClick={() => setMatchType('similar')}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  matchType === 'similar' 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-secondary/40 hover:text-secondary/60 hover:bg-secondary/5'
                }`}
              >
                Similar
              </button>
              <button 
                onClick={() => setMatchType('complementary')}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  matchType === 'complementary' 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-secondary/40 hover:text-secondary/60 hover:bg-secondary/5'
                }`}
              >
                Complementary
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
                <button onClick={() => removeFilter(filter)} className="hover:text-primary transition-colors">
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
              Match Percentage
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

          <div className="grid md:grid-cols-2 gap-8">
            {profiles
              .filter(profile => {
                if (activeFilters.length === 0) return true;
                // Basic filtering logic for demo
                const isRoleMatch = activeFilters.some(f => profile.role.includes(f.toUpperCase()));
                const isInstMatch = activeFilters.some(f => profile.affiliation === f || profile.institution.includes(f));
                if (activeFilters.some(f => ['Mentor', 'Mentee', 'Peer Collaborator'].includes(f))) {
                  return isRoleMatch || isInstMatch;
                }
                return true;
              })
              .map(profile => (
              <div key={profile.id} className="group relative bg-white border border-secondary/10 rounded-2xl p-6 shadow-sm hover:shadow-soft transition-all flex flex-col animate-in fade-out duration-300 zoom-in-95">
                
                {/* Utility Bar */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button 
                    onClick={() => toggleBookmark(profile.id)}
                    className={`p-1.5 rounded-full transition-all ${bookmarkedIds.has(profile.id) ? 'text-primary bg-primary/5' : 'text-secondary/20 hover:text-primary hover:bg-primary/5'}`} 
                    title="Save to Shortlist"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedIds.has(profile.id) ? 'fill-primary' : ''}`} />
                  </button>
                  <button 
                    onClick={() => handleDismiss(profile.id)}
                    className="p-1.5 rounded-full text-secondary/20 hover:text-primary hover:bg-primary/5 transition-all" 
                    title="Dismiss"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-20 h-20 group/avatar cursor-pointer">
                  <div className="w-full h-full bg-secondary/5 rounded-full overflow-hidden border-2 border-white shadow-soft transition-transform group-hover/avatar:scale-105">
                    <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" />
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <h3 className="text-xl font-bold font-serif text-secondary hover:text-primary transition-colors cursor-pointer">{profile.name}</h3>
                    {profile.isVerified && (
                      <div className="bg-primary/10 p-0.5 rounded-full" title="Verified Researcher">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary fill-primary/10" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-secondary/40 uppercase tracking-wider mb-3">
                    {profile.title} • {profile.institution}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-muted text-secondary/60">
                      {profile.role}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-semibold text-secondary/40 italic">
                      <Clock className="w-2.5 h-2.5" />
                      {profile.status} • {profile.lastActive}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-5 rounded-xl border border-secondary/5 mb-6 flex-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-secondary/5">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/60 flex items-center gap-2">
                    <Network className="w-3.5 h-3.5" />
                    Structural Alignment
                  </h4>
                  <span className="text-[11px] font-black text-primary bg-white px-2.5 py-1 rounded shadow-sm border border-primary/10">
                    {profile.matchScore}% Match
                  </span>
                </div>
                
                <p className="text-sm leading-relaxed text-secondary/70 mb-4" style={{ lineHeight: '1.7' }} dangerouslySetInnerHTML={{
                  __html: profile.alignment.replace(/Natural Language Processing|Data Engineering pipelines|distributed systems|human-computer interaction/g, match => `<span class="text-secondary font-bold">${match}</span>`)
                }} />

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {profile.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-secondary/5 text-[9px] font-bold text-secondary/50 rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 pt-3 border-t border-secondary/5">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-secondary/30">
                    <Users className="w-3 h-3 opacity-50" />
                    <span>{profile.mutualConnections} Mutual Connections</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-secondary/30">
                    <School className="w-3 h-3 opacity-50" />
                    <span>Affiliated with {profile.affiliation}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => !sentRequestIds.has(profile.id) && handleConnect(profile.id, profile.name)}
                className={`w-full btn-outline !rounded-xl ${
                  sentRequestIds.has(profile.id) 
                    ? 'opacity-50 cursor-default' 
                    : ''
                }`}
              >
                {sentRequestIds.has(profile.id) 
                  ? 'Request Sent' 
                  : (profile.role === 'MENTOR' ? 'Request Mentorship' : 'Connect Now')
                }
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="lg:col-span-3 space-y-10 sticky top-28 self-start">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-8">Recently Viewed</h3>
        
        <div className="space-y-6 mb-12">
          {recentProfiles.map(profile => (
            <div key={profile.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/5 rounded-lg overflow-hidden border border-secondary/10">
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{profile.name}</h4>
                  <p className="text-[10px] font-semibold text-secondary/40 uppercase tracking-wider">{profile.title}</p>
                </div>
              </div>
              <button className="p-1.5 rounded-md text-secondary/20 hover:text-primary hover:bg-primary/5 transition-all opacity-0 group-hover:opacity-100">
                <Users className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <button 
          onClick={handleClearHistory}
          className="w-full py-4 border-t border-secondary/5 text-[10px] font-black uppercase tracking-widest text-secondary/30 hover:text-primary transition-all text-center block"
        >
          Clear viewing history
        </button>
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

export default MatchingHub;
