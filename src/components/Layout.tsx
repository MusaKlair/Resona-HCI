"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import OrbitalLogo from './OrbitalLogo';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000); // 1s transition
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If path is root (/), auth, or onboarding, consider it unauthenticated/public view
  const isPublicPage = pathname === '/' || pathname === '/auth' || pathname === '/onboarding';
  const isAuthenticated = !isPublicPage;
  const isAppPage = pathname === '/mentorship' || pathname === '/workspace' || pathname.includes('/profile/');

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="flex flex-col items-center">
            <OrbitalLogo className="w-20 h-20 animate-[spin_1.5s_linear_infinite]" />
            <div className="mt-8 text-secondary/30 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
              Resonating
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b-[1.5px] border-border ${
          isScrolled ? 'shadow-soft py-4' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <OrbitalLogo className="h-10 w-10 transition-transform duration-700 group-hover:rotate-180" />
            <span className="text-2xl font-bold font-serif tracking-tight text-text-primary">Resona</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {isAuthenticated ? (
              ['Home', 'Match Hub', 'Problems', 'Funding', 'Workspace'].map((item) => {
                const viewMap: Record<string, string> = {
                  'Home': '/home',
                  'Match Hub': '/matching',
                  'Problems': '/problems',
                  'Funding': '/funding',
                  'Workspace': '/workspace',
                  'Profile': '/profile'
                };
                const mappedPath = viewMap[item];
                const isActive = pathname === mappedPath;
                return (
                  <Link 
                    key={item} 
                    href={mappedPath}
                    className={`text-sm font-bold transition-colors ${isActive ? 'text-text-primary font-black' : 'text-text-secondary hover:text-text-primary'}`}
                  >
                    {item}
                  </Link>
                );
              })
            ) : (
              ['Platform', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href={`/#${item.toLowerCase()}`}
                  className="text-sm font-bold text-secondary/70 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="relative group">
                  <Search className="w-4 h-4 text-secondary/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 bg-surface border border-border rounded-full text-sm focus:outline-none focus:border-primary/30 focus:bg-background transition-all w-40 focus:w-64"
                  />
                </div>
                <Link 
                  href="/mentorship"
                  className="p-2.5 rounded-full hover:bg-secondary/5 transition-colors relative group"
                  title="Inbox"
                >
                  <Mail className="w-5 h-5 text-secondary/60 group-hover:text-primary transition-colors" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
                </Link>

                <div className="relative">
                  <button 
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className={`p-2.5 rounded-full transition-all relative ${isNotificationsOpen ? 'bg-secondary/10 text-primary' : 'hover:bg-secondary/5 text-secondary/60'}`}
                  >
                    <Bell className="w-5 h-5" />
                    <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-primary rounded-full" />
                  </button>

                  {/* Notification Popover */}
                  {isNotificationsOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)} />
                      <div className="absolute top-full right-0 mt-3 w-80 bg-surface border border-border rounded-2xl shadow-elevated z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                        <div className="p-4 border-b border-secondary/5 flex items-center justify-between bg-secondary/[0.02]">
                          <span className="text-xs font-bold text-secondary/60">Quick Alerts</span>
                          <button className="text-[10px] font-bold text-primary hover:underline">Mark all read</button>
                        </div>
                        <div className="max-h-[350px] overflow-y-auto scrollbar-hide">
                          {[
                            { id: 1, title: 'New Peer Review', desc: 'Dr. Aris Thorne commented on your publication.', time: '2m ago', unread: true },
                            { id: 2, title: 'Match Alert', desc: 'A new researcher aligns with your Quantum Ethics project.', time: '1h ago', unread: true },
                            { id: 3, title: 'Grant Opportunity', desc: 'National Science Foundation released a new RFP.', time: '3h ago', unread: false },
                            { id: 4, title: 'Citation Spike', desc: 'Your 2023 paper received 5 new citations today.', time: '5h ago', unread: false },
                            { id: 5, title: 'Collaboration Invite', desc: 'Sarah Jenkins wants to discuss a joint paper.', time: '8h ago', unread: false },
                          ].map((notif) => (
                            <div key={notif.id} className={`p-4 border-b border-secondary/5 hover:bg-secondary/[0.01] transition-colors cursor-pointer group relative ${notif.unread ? 'bg-primary/[0.02]' : ''}`}>
                              {notif.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="text-[11px] font-black text-secondary dark:text-text-primary uppercase tracking-wider">{notif.title}</h4>
                                <span className="text-[9px] font-medium text-secondary/30">{notif.time}</span>
                              </div>
                              <p className="text-xs text-secondary/60 leading-relaxed line-clamp-2">{notif.desc}</p>
                            </div>
                          ))}
                        </div>
                        <Link 
                          href="/mentorship" 
                          onClick={() => setIsNotificationsOpen(false)}
                          className="block p-4 text-center text-xs font-bold text-secondary/60 hover:text-primary hover:bg-secondary/[0.02] transition-all border-t border-secondary/5"
                        >
                          View all activity
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                <ThemeToggle />

                <Link 
                  href="/upload"
                  className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors shadow-sm mx-2 active:scale-95"
                >
                  Create / Post
                </Link>
                <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-primary transition-all shadow-sm">
                  <img src="/avatar_aris.png" alt="Profile" className="w-full h-full object-cover" />
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                  Log In
                </Link>
                <Link href="/auth" className="bg-primary text-white font-bold px-6 py-2.5 rounded-md hover:bg-primary/90 transition-all text-sm shadow-md shadow-primary/20">
                  Join Resona
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            {isAuthenticated ? (
              ['Home', 'Match Hub', 'Problems', 'Funding', 'Workspace'].map((item) => {
                const viewMap: Record<string, string> = {
                  'Home': '/home',
                  'Match Hub': '/matching',
                  'Problems': '/problems',
                  'Funding': '/funding',
                  'Workspace': '/workspace',
                  'Profile': '/profile'
                };
                const mappedPath = viewMap[item];
                return (
                  <Link 
                    key={item} 
                    href={mappedPath}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-lg font-bold py-2 border-b border-secondary/5 text-secondary/70 hover:text-primary"
                  >
                    {item}
                  </Link>
                );
              })
            ) : (
              ['Platform', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-lg font-bold py-2 border-b border-secondary/5 text-secondary/70 hover:text-primary"
                >
                  {item}
                </a>
              ))
            )}
            {!isAuthenticated && (
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center text-secondary font-bold hover:text-primary transition-colors">Log In</Link>
                <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center rounded-full font-bold bg-primary text-white hover:bg-primary/90 transition-colors">Join Resona</Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className={`pt-20 ${isAppPage ? 'min-h-[calc(100vh-80px)]' : 'min-h-[calc(100vh-400px)]'}`}>
        {children}
      </main>

      {/* Footer */}
      {!isAppPage && (
        <footer className="bg-surface border-t border-border pt-12 pb-8 mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <OrbitalLogo className="h-6 w-6" />
                  <span className="text-lg font-bold font-serif tracking-tight">Resona</span>
                </div>
                <p className="text-secondary/60 text-xs leading-relaxed">
                  Empowering the academic world through intelligent matchmaking and seamless collaboration.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-sm">Platform</h4>
                <ul className="space-y-2 text-xs text-secondary/60">
                  <li><Link href="/matching" className="hover:text-primary transition-colors">Matching Hub</Link></li>
                  <li><Link href="/problems" className="hover:text-primary transition-colors">Research Problems</Link></li>
                  <li><Link href="/funding" className="hover:text-primary transition-colors">Grant Directory</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm">Resources</h4>
                <ul className="space-y-2 text-xs text-secondary/60">
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm">Company</h4>
                <ul className="space-y-2 text-xs text-secondary/60">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-secondary/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-secondary/40 uppercase tracking-wider font-bold">
              <p>© 2026 Resona Academic Platform. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
