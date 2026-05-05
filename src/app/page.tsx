import { Star, ArrowRight, Play, CheckCircle2, Sparkles, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 w-full">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                <Star className="w-4 h-4 fill-primary" />
                <span>#1 Academic Networking Platform</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black font-serif leading-[1.1]">
                Bring joy back to research.
              </h1>
              
              <p className="text-lg md:text-xl text-secondary/60 leading-relaxed max-w-xl">
                The unified workspace where researchers, students, and institutions connect. Discover urgent open problems, secure vital funding, and accelerate your academic impact.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link 
                  href="/auth"
                  className="btn-primary flex items-center gap-2 shadow-2xl shadow-primary/30"
                >
                  Request Early Access
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/home" className="flex items-center gap-2 px-6 py-3 border border-secondary text-secondary font-bold rounded-md hover:bg-secondary/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-secondary text-secondary" />
                  </div>
                  Explore the Platform
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              {/* Main Mockup Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square group shadow-2xl border border-secondary/10 bg-white p-2">
                <div className="w-full h-full rounded-xl overflow-hidden border border-secondary/5">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80&w=2070" 
                    alt="Intelligent Match Hub" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  {/* Internal Mockup Elements (Omnibar Overlay) */}
                  <div className="absolute top-8 left-8 right-8 h-12 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-secondary/5 flex items-center px-4 justify-between">
                    <div className="text-[10px] font-black text-secondary/40 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Search Omnibar
                    </div>
                    <div className="flex bg-secondary/5 p-1 rounded-md gap-1">
                       <div className="px-3 py-1 bg-white shadow-sm rounded-sm text-[8px] font-black text-secondary uppercase">Similar</div>
                       <div className="px-3 py-1 text-[8px] font-black text-secondary/40 uppercase">Complementary</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Structural Alignment Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-elevated border border-secondary/5 animate-bounce-subtle">
                <div className="text-[10px] font-black text-secondary/40 uppercase tracking-widest mb-1">Taxonomic Match</div>
                <div className="flex items-center gap-3">
                   <div className="text-3xl font-black font-serif text-secondary">92%</div>
                   <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">High Alignment</div>
                </div>
              </div>

              {/* Floating Element 2: Availability Pill */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-secondary text-white p-4 rounded-2xl shadow-elevated border border-white/10 animate-float">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Available Now</span>
                </div>
                <div className="text-sm font-bold font-serif leading-tight">
                  Dr. Aris Thorne <br />
                  <span className="text-[10px] font-normal text-white/40 uppercase tracking-widest">Active 1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t border-secondary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-black font-serif tracking-tight">
              The Modern Academic <br /> Operating System
            </h2>
            <p className="text-xl text-secondary/60 leading-relaxed">
              Say goodbye to siloed emails and fragmented tools. Resona brings your entire research lifecycle into one beautiful, unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 border border-secondary/10 rounded-2xl hover:-translate-y-2 hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-secondary">Intelligent Matchmaking</h3>
              <p className="text-secondary/60 leading-relaxed">
                Leverage precise taxonomic matching to instantly connect with high-impact collaborators, specialized mentors, and leading institutions based on deep academic synergy.
              </p>
            </div>

            <div className="group bg-white p-10 border border-secondary/10 rounded-2xl hover:-translate-y-2 hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <LayoutDashboard className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-secondary">Problem Boards</h3>
              <p className="text-secondary/60 leading-relaxed">
                Deploy open challenges or seamlessly source global talent for critical projects. Engage in frictionless peer review and execute complex research initiatives at scale.
              </p>
            </div>

            <div className="group bg-white p-10 border border-secondary/10 rounded-2xl hover:-translate-y-2 hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-secondary">Unified Funding</h3>
              <p className="text-secondary/60 leading-relaxed">
                Streamline capital acquisition with centralized grant deployment. Access an elite directory of institutional funding, advanced compute clusters, and global facility access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="institutions" className="py-32 bg-secondary text-white relative overflow-hidden">
         {/* Subtle Texture - Ultra-low contrast */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
           <div className="animate-in fade-in slide-in-from-left-8 duration-700">
             <h2 className="text-5xl font-black font-serif leading-[1.1] mb-8">
               Collaborate Without <br /> The Friction.
             </h2>
             <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-lg">
               Dive into dedicated collaborative workspaces with built-in version control, milestone tracking, and threaded peer reviews. We handle the admin, so you can handle the science.
             </p>
              <Link 
                href="/auth"
                className="px-8 py-3.5 inline-block bg-primary text-white font-bold text-sm rounded-md hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Join The Network
              </Link>
           </div>
           <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
             <div className="w-full aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm p-4 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Product UI Composite" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-110 opacity-60"
                />
                {/* Floating UI Overlay (Heatmap & Chat) */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full bg-secondary/80 backdrop-blur-md rounded-xl border border-white/10 shadow-3xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Collaborative Workspace</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                    <div className="flex-1 p-6 flex gap-6 overflow-hidden">
                       {/* Mock Heatmap */}
                       <div className="flex-1 space-y-2 opacity-80">
                         <div className="h-4 w-32 bg-white/10 rounded mb-4" />
                         <div className="grid grid-cols-12 gap-1.5">
                            {[...Array(48)].map((_, i) => (
                              <div key={i} className={`aspect-square rounded-sm ${i % 7 === 0 ? 'bg-primary' : i % 5 === 0 ? 'bg-primary/40' : 'bg-white/5'}`} />
                            ))}
                         </div>
                       </div>
                       {/* Mock Chat Sidebar */}
                       <div className="w-48 bg-white/5 rounded-lg p-4 border border-white/5 hidden md:block">
                          <div className="space-y-4">
                             <div className="flex gap-2">
                               <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                               <div className="space-y-1">
                                 <div className="h-1.5 w-16 bg-white/20 rounded" />
                                 <div className="h-1.5 w-24 bg-white/10 rounded" />
                               </div>
                             </div>
                             <div className="flex gap-2 justify-end">
                               <div className="space-y-1">
                                 <div className="h-1.5 w-20 bg-primary/40 rounded" />
                               </div>
                               <div className="w-6 h-6 rounded-full bg-primary/20 shrink-0" />
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </section>
    </div>
  );
}
