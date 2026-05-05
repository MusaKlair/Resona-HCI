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
                <Link href="/home" className="btn-outline flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-secondary text-secondary" />
                  </div>
                  Explore the Platform
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square group shadow-elevated border border-secondary/10">
                <img 
                  src="/hero_dashboard.png" 
                  alt="Resona Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t border-secondary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tight">
              The Modern Academic <br /> Operating System
            </h2>
            <p className="text-xl text-secondary/60 leading-relaxed">
              Say goodbye to siloed emails and fragmented tools. Resona brings your entire research lifecycle into one beautiful, unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium bg-secondary/[0.02] border border-secondary/10 hover:-translate-y-2 hover:shadow-elevated transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">Intelligent Matchmaking</h3>
              <p className="text-secondary/70 leading-relaxed">
                Leverage precise taxonomic matching to instantly connect with high-impact collaborators, specialized mentors, and leading institutions based on deep academic synergy.
              </p>
            </div>

            <div className="card-premium bg-secondary/[0.02] border border-secondary/10 hover:-translate-y-2 hover:shadow-elevated transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <LayoutDashboard className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">Problem Boards</h3>
              <p className="text-secondary/70 leading-relaxed">
                Deploy open challenges or seamlessly source global talent for critical projects. Engage in frictionless peer review and execute complex research initiatives at scale.
              </p>
            </div>

            <div className="card-premium bg-secondary/[0.02] border border-secondary/10 hover:-translate-y-2 hover:shadow-elevated transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">Unified Funding</h3>
              <p className="text-secondary/70 leading-relaxed">
                Streamline capital acquisition with centralized grant deployment. Access an elite directory of institutional funding, advanced compute clusters, and global facility access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Visual Section */}
      <section id="institutions" className="py-32 bg-secondary text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-5xl font-black font-serif leading-[1.1] mb-8">
               Collaborate without the friction.
             </h2>
             <p className="text-xl text-white/60 leading-relaxed mb-12">
               Dive into dedicated collaborative workspaces with built-in version control, milestone tracking, and threaded peer reviews. We handle the admin, so you can handle the science.
             </p>
             <Link 
               href="/auth"
               className="px-8 py-4 inline-block bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors"
             >
               Join the Network
             </Link>
           </div>
           <div className="relative">
             <div className="w-full aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-elevated p-0 backdrop-blur-sm">
                <img 
                  src="/collaboration_dark.png" 
                  alt="Global Research Network" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
             </div>
           </div>
         </div>
      </section>
    </div>
  );
}
