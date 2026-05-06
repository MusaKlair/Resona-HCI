"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ThumbsUp, MessageSquare, Bookmark, CheckCircle2, LayoutGrid, FileText, Target, Wallet, Share2, Image as ImageIcon, Send } from 'lucide-react';

const mockFeed = [
  {
    id: 1,
    type: 'PUBLICATION',
    author: 'Dr. Aris Thorne',
    avatar: '/avatar_aris.png',
    field: 'Materials Science',
    time: '2h ago',
    title: 'Synthesis of Novel Carbon Nanotube Arrays for High-Efficiency Energy Storage',
    href: '/publication',
    summary: 'We present a reproducible method for synthesizing highly ordered carbon nanotube arrays, demonstrating a 40% increase in specific capacitance compared to traditional random networks. This structural consistency opens new pathways for supercapacitor design.',
    imageUrl: '/post_nanotube.png',
    likes: 142,
    comments: 28,
    matchScore: 'Matches 4 of your skills',
    savedCount: '8 researchers saved this',
  },
  {
    id: 2,
    type: 'PROBLEM',
    author: 'Global Health Initiative',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=GlobalHealth',
    field: 'Public Health',
    time: '5h ago',
    title: 'Scalable Diagnostics for Rural Endemic Pathogens',
    summary: 'Seeking innovative, low-cost diagnostic tools for rapid field deployment in resource-limited settings. Current solutions require refrigeration and trained technicians, severely limiting reach.',
    tags: ['Diagnostics', 'Global Health', 'Engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    likes: 89,
    comments: 12,
    matchScore: 'Strategic match for your lab',
    savedCount: '24 people interested',
  },
  {
    id: 3,
    type: 'GRANT',
    author: 'NSF Grants Board',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=NSF',
    field: 'Funding',
    time: '1d ago',
    title: 'Advanced Computational Methods in Climate Modeling',
    summary: 'Funding available for interdisciplinary teams developing next-generation predictive models for localized climate anomalies. Total pool: $2.5M.',
    deadline: 'Oct 15, 2024',
    maxAward: '$500k',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    likes: 210,
    comments: 34,
    matchScore: 'Matches your current project',
    savedCount: '56 institutions tracking',
  },
  {
    id: 4,
    type: 'PUBLICATION',
    author: 'Elena Rostova',
    avatar: '/avatar_elena.png',
    field: 'Bioinformatics',
    time: '1d ago',
    title: 'Predictive Protein Folding using Graph Neural Networks',
    summary: 'We propose a novel graph-based approach to protein folding prediction that outperforms current state-of-the-art models in edge-case structural anomalies. Our dataset and training weights are open-sourced.',
    likes: 315,
    comments: 42,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    matchScore: 'Highly relevant to your profile',
    savedCount: '112 citations',
  },
  {
    id: 5,
    type: 'PROBLEM',
    author: 'UrbanTech Solutions',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=UrbanTech',
    field: 'Urban Planning',
    time: '2d ago',
    title: 'Edge AI for Real-Time Traffic Flow Optimization',
    summary: 'Looking for computer vision experts to collaborate on an edge-computing solution for real-time traffic light optimization. Must handle low-visibility conditions and pedestrian tracking.',
    tags: ['Edge AI', 'Computer Vision', 'Smart Cities'],
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    likes: 156,
    comments: 19,
    matchScore: 'Top 5% Match',
    savedCount: '8 collaborators applied',
  },
  {
    id: 6,
    type: 'GRANT',
    author: 'Department of Energy',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=DOE',
    field: 'Funding',
    time: '3d ago',
    title: 'Renewable Energy Transition Seed Fund',
    summary: 'Early-stage funding for startups and research teams developing grid-scale storage solutions for solar and wind energy. Emphasis on non-lithium alternatives.',
    deadline: 'Nov 01, 2024',
    maxAward: '$1.2M',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
    likes: 423,
    comments: 56,
    matchScore: 'High Match Probability',
    savedCount: '201 teams tracking',
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
  const [activeComments, setActiveComments] = useState<number | null>(null);
  const [commentText, setCommentText] = useState('');
  const [selectedPostType, setSelectedPostType] = useState('Update');
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());
  const [showSaveToast, setShowSaveToast] = useState(false);

  const handleSave = (id: number) => {
    setSavedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        setShowSaveToast(true);
        setTimeout(() => setShowSaveToast(false), 3000);
      }
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* Left Sidebar - Filters */}
      <aside className="lg:col-span-2 space-y-6 sticky top-28 self-start">
        <h3 className="font-black font-serif text-lg tracking-tight">Feed Filters</h3>
        <nav className="flex flex-col gap-1">
          {[
            { name: 'All Content', icon: <LayoutGrid className="w-4 h-4 text-primary" /> },
            { name: 'Publications', icon: <FileText className="w-4 h-4 text-primary" /> },
            { name: 'Problems', icon: <Target className="w-4 h-4 text-primary" /> },
            { name: 'Grants', icon: <Wallet className="w-4 h-4 text-primary" /> }
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
        
        {/* Start a Post Input */}
        <div className="bg-white border border-secondary/10 rounded-2xl p-4 shadow-sm">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-secondary/10">
              <img src="/avatar_aris.png" alt="You" className="w-full h-full object-cover" />
            </div>
            <input 
              type="text"
              placeholder={
                selectedPostType === 'Paper' ? "Upload a publication or draft..." :
                selectedPostType === 'Problem' ? "Define a research problem or challenge..." :
                selectedPostType === 'Media' ? "Share a technical visualization or image..." :
                "Share an update, open problem, or publication..."
              }
              className="flex-1 bg-secondary/5 hover:bg-secondary/10 text-secondary/70 placeholder:text-secondary/40 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/20"
            />
          </div>
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-secondary/5">
            <div className="flex gap-1">
              <button 
                onClick={() => setSelectedPostType(selectedPostType === 'Media' ? 'Update' : 'Media')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs font-bold ${selectedPostType === 'Media' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary/5 text-secondary/60'}`}
              >
                <ImageIcon className="w-4 h-4" /> Media
              </button>
              <button 
                onClick={() => setSelectedPostType(selectedPostType === 'Paper' ? 'Update' : 'Paper')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs font-bold ${selectedPostType === 'Paper' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary/5 text-secondary/60'}`}
              >
                <FileText className="w-4 h-4" /> Paper
              </button>
              <button 
                onClick={() => setSelectedPostType(selectedPostType === 'Problem' ? 'Update' : 'Problem')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-xs font-bold ${selectedPostType === 'Problem' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary/5 text-secondary/60'}`}
              >
                <Target className="w-4 h-4" /> Problem
              </button>
            </div>
            <button className="btn-primary">
              Post Update
            </button>
          </div>
        </div>

        {mockFeed
          .filter(post => {
            if (filter === 'All Content') return true;
            if (filter === 'Publications') return post.type === 'PUBLICATION';
            if (filter === 'Problems') return post.type === 'PROBLEM';
            if (filter === 'Grants') return post.type === 'GRANT';
            return true;
          })
          .map(post => (
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

            <div className="cursor-pointer">
              {post.href ? (
                <Link href={post.href}>
                  <h2 className="text-xl md:text-2xl font-black font-serif mb-1 leading-tight hover:text-primary transition-colors">{post.title}</h2>
                </Link>
              ) : (
                <h2 className="text-xl font-bold font-serif mb-1 leading-snug" onClick={() => onViewDetail(post.id)}>{post.title}</h2>
              )}
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-2 py-0.5 rounded">
                    {post.matchScore}
                  </span>
                  <span className="text-[10px] font-bold text-secondary/20">•</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary/30">
                    {post.savedCount}
                  </span>
                </div>
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
                  <p className="font-bold text-sm">{post.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary/40">Max Award</p>
                  <p className="font-bold text-base text-primary">{post.maxAward}</p>
                </div>
              </div>
            )}

            {/* Engagement Bar */}
            <div className="flex items-center gap-6 pt-3 border-t border-secondary/5 mb-3">
              <button className="flex items-center gap-2 text-xs font-bold text-secondary/60 hover:text-primary transition-colors group">
                <ThumbsUp className="w-4 h-4 group-hover:fill-primary/10" /> 
                <span>{post.likes}</span>
              </button>
              <button 
                onClick={() => setActiveComments(activeComments === post.id ? null : post.id)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors group ${activeComments === post.id ? 'text-primary' : 'text-secondary/60 hover:text-primary'}`}
              >
                <MessageSquare className={`w-4 h-4 group-hover:fill-primary/10 ${activeComments === post.id ? 'fill-primary/10' : ''}`} /> 
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-secondary/60 hover:text-primary transition-colors group">
                <Share2 className="w-4 h-4" /> 
                <span>Share</span>
              </button>
              <button 
                onClick={() => handleSave(post.id)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors group ml-auto ${savedPosts.has(post.id) ? 'text-primary' : 'text-secondary/60 hover:text-primary'}`}
              >
                <Bookmark className={`w-4 h-4 group-hover:fill-primary/10 ${savedPosts.has(post.id) ? 'fill-primary' : ''}`} /> 
                <span>{savedPosts.has(post.id) ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            {/* Comment Section */}
            {activeComments === post.id && (
              <div className="space-y-4 mb-4 animate-in slide-in-from-top-2 duration-300">
                <div className="flex gap-3 items-start bg-secondary/[0.02] p-3 rounded-xl border border-secondary/5">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-secondary/10">
                    <img src="/avatar_aris.png" alt="You" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 relative">
                    <textarea 
                      placeholder="Write a technical comment..."
                      className="w-full bg-transparent text-sm focus:outline-none min-h-[40px] pt-1.5 resize-none"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button className="absolute right-0 bottom-0 p-1.5 text-primary hover:scale-110 transition-transform">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Mock Comments */}
                <div className="space-y-3 pl-2">
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">M</div>
                    <div className="flex-1 bg-secondary/5 p-2.5 rounded-2xl rounded-tl-none">
                      <p className="text-[10px] font-black text-secondary/80 mb-1">Dr. Marcus Chen <span className="font-normal text-secondary/40 ml-1">• 1h ago</span></p>
                      <p className="text-xs text-secondary/70 leading-relaxed">Impressive structural consistency. Have you considered the impact on cycle stability over 1000+ charges?</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button className="w-full btn-outline">
              {post.type === 'PUBLICATION' ? 'Read Publication' : 
               post.type === 'PROBLEM' ? 'Propose Solution' : 'View Details'}
            </button>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="lg:col-span-3 space-y-10 sticky top-28 self-start">
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
                <button className="btn-outline !px-3 !py-1 !text-xs">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Save Toast Notification */}
      {showSaveToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 ring-4 ring-primary/5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest">Saved to Workspace</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomeFeed;
