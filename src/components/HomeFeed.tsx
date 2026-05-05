"use client";
import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Bookmark, ArrowRight, UserPlus, CheckCircle2, LayoutGrid, FileText, Target, Wallet } from 'lucide-react';

const mockFeed = [
  {
    id: 1,
    type: 'PUBLICATION',
    author: 'Dr. Aris Thorne',
    avatar: '/avatar_aris.png',
    field: 'Materials Science',
    time: '2h ago',
    title: 'Synthesis of Novel Carbon Nanotube Arrays for High-Efficiency Energy Storage',
    summary: 'We present a reproducible method for synthesizing highly ordered carbon nanotube arrays, demonstrating a 40% increase in specific capacitance compared to traditional random networks. This structural consistency opens new pathways for supercapacitor design.',
    imageUrl: '/post_nanotube.png',
    likes: 142,
    comments: 28,
  },
  {
    id: 2,
    type: 'PROBLEM',
    author: 'Global Health Initiative',
    avatar: '',
    field: 'Public Health',
    time: '5h ago',
    title: 'Scalable Diagnostics for Rural Endemic Pathogens',
    summary: 'Seeking innovative, low-cost diagnostic tools for rapid field deployment in resource-limited settings. Current solutions require refrigeration and trained technicians, severely limiting reach.',
    tags: ['Diagnostics', 'Global Health', 'Engineering'],
  },
  {
    id: 3,
    type: 'GRANT',
    author: 'NSF Grants Board',
    avatar: '',
    field: 'Funding',
    time: '1d ago',
    title: 'Advanced Computational Methods in Climate Modeling',
    summary: 'Funding available for interdisciplinary teams developing next-generation predictive models for localized climate anomalies. Total pool: $2.5M.',
    deadline: 'Oct 15, 2024',
    maxAward: '$500k',
  }
];

const trendingTags = ['#QuantumComputing', '#CRISPR', '#UrbanPlanning', '#BatteryTech', '#MachineLearning'];

const suggestedPeers = [
  { id: 1, name: 'Elena Rostova', field: 'Bioinformatics', avatar: '/avatar_elena.png' },
  { id: 2, name: 'Marcus Chen', field: 'Data Science', avatar: '/avatar_marcus.png' },
  { id: 3, name: 'Sarah Jenkins', field: 'Robotics', avatar: '/avatar_sarah.png' },
];

interface HomeFeedProps {
  onViewDetail: (id: number) => void;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ onViewDetail }) => {
  const [filter, setFilter] = useState('All Content');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Sidebar - Filters */}
      <aside className="lg:col-span-2 space-y-6">
        <h3 className="font-black font-serif text-lg tracking-tight">Feed Filters</h3>
        <nav className="flex flex-col gap-1">
          {[
            { name: 'All Content', icon: <LayoutGrid className="w-4 h-4" /> },
            { name: 'Publications', icon: <FileText className="w-4 h-4" /> },
            { name: 'Problems', icon: <Target className="w-4 h-4" /> },
            { name: 'Grants', icon: <Wallet className="w-4 h-4" /> }
          ].map(item => (
            <button 
              key={item.name}
              onClick={() => setFilter(item.name)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${
                filter === item.name ? 'bg-secondary/10 text-secondary font-bold' : 'text-secondary/60 hover:bg-secondary/5 hover:text-secondary font-semibold'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Feed */}
      <main className="lg:col-span-7 space-y-6">
        {mockFeed.map(post => (
          <div key={post.id} className="bg-white border border-secondary/10 rounded-2xl p-6 shadow-sm hover:shadow-soft transition-all">
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/5 rounded-lg overflow-hidden flex items-center justify-center border border-secondary/10">
                  {post.avatar ? (
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-bold text-secondary/40 text-xs">{post.author.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{post.author}</h4>
                  <p className="text-xs text-secondary/50">{post.field} • {post.time}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70">
                {post.type}
              </span>
            </div>

            <div className="cursor-pointer" onClick={() => onViewDetail(post.id)}>
              <h2 className="text-xl font-bold font-serif mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-secondary/70 leading-relaxed mb-4">{post.summary}</p>
              
              {post.imageUrl && (
                <div className="w-full h-64 bg-secondary/5 rounded-xl border border-secondary/10 mb-4 flex items-center justify-center relative overflow-hidden group shadow-sm">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
            </div>

            {post.tags && (
              <div className="flex gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.deadline && (
              <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-xl mb-4 border border-secondary/10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary/40">Deadline</p>
                  <p className="font-bold">{post.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary/40">Max Award</p>
                  <p className="font-bold text-lg">{post.maxAward}</p>
                </div>
              </div>
            )}

            {post.type === 'PUBLICATION' && (
              <div className="flex items-center gap-4 text-sm font-semibold text-secondary/60 pt-2 border-t border-secondary/5">
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors"><ThumbsUp className="w-4 h-4" /> {post.likes}</button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors"><MessageSquare className="w-4 h-4" /> {post.comments}</button>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors ml-auto"><Bookmark className="w-4 h-4" /> Save</button>
              </div>
            )}

            {post.type === 'PROBLEM' && (
              <button className="w-full bg-primary text-white font-bold text-sm py-2.5 rounded-md hover:bg-primary/90 transition-colors mt-2 shadow-sm">
                Propose Solution
              </button>
            )}

            {post.type === 'GRANT' && (
              <button className="w-full border border-secondary/20 text-secondary font-bold text-sm py-2.5 rounded-md hover:bg-secondary/5 transition-colors mt-2">
                View Details
              </button>
            )}
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="lg:col-span-3 space-y-10">
        <div>
          <h3 className="font-black text-xs uppercase tracking-widest text-secondary/50 mb-4">Trending Tags</h3>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-secondary/70 hover:bg-secondary/10 transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-xs uppercase tracking-widest text-secondary/50 mb-4">Suggested Peers</h3>
          <div className="space-y-4">
            {suggestedPeers.map(peer => (
              <div key={peer.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/5 rounded-lg overflow-hidden flex items-center justify-center border border-secondary/10">
                    <img src={peer.avatar} alt={peer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{peer.name}</h4>
                    <p className="text-xs text-secondary/50">{peer.field}</p>
                  </div>
                </div>
                <button className="border border-secondary/20 text-secondary font-bold text-xs px-3 py-1 rounded-md hover:bg-secondary/5 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>

    </div>
  );
};

export default HomeFeed;
