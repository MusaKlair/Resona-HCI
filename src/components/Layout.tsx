"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, MessageSquare, Mail, User, Settings, LogOut, ChevronRight, Sun, Moon, Accessibility, Mic, MicOff } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import OrbitalLogo from './OrbitalLogo';
import { useTheme } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [voiceAssistantEnabled, setVoiceAssistantEnabled] = useState(false);
  const [voiceAssistantOpen, setVoiceAssistantOpen] = useState(false);
  const [voiceListening, setVoiceListening] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedDyslexic = localStorage.getItem('dyslexic-font') === 'true';
    setIsDyslexic(savedDyslexic);
  }, []);

  useEffect(() => {
    setVoiceAssistantEnabled(localStorage.getItem('resona-voice-assistant') === 'true');
    const handleToggle = () => {
      setVoiceAssistantEnabled(localStorage.getItem('resona-voice-assistant') === 'true');
    };
    window.addEventListener('resona-voice-toggle', handleToggle);
    return () => window.removeEventListener('resona-voice-toggle', handleToggle);
  }, [pathname]);

  useEffect(() => {
    if (isDyslexic) {
      document.body.classList.add('font-dyslexic');
      localStorage.setItem('dyslexic-font', 'true');
    } else {
      document.body.classList.remove('font-dyslexic');
      localStorage.setItem('dyslexic-font', 'false');
    }
  }, [isDyslexic]);

  const isPublicPage = pathname === '/' || pathname === '/auth' || pathname === '/onboarding';
  const isAuthenticated = !isPublicPage;
  const isAppPage = pathname === '/mentorship' || pathname === '/workspace' || pathname === '/settings' || pathname.includes('/profile/');

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="flex flex-col items-center">
            <OrbitalLogo className="w-20 h-20 animate-[spin_1.5s_linear_infinite] text-text-primary" />
            <div className="mt-8 text-text-secondary text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
              Resonating
            </div>
          </div>
        </div>
      )}

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface border-b border-border backdrop-blur-xl ${
          isScrolled ? 'shadow-soft py-4' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group text-text-primary">
            <OrbitalLogo className="h-10 w-10 transition-transform duration-700 group-hover:rotate-180" />
            <span className="text-2xl font-bold font-serif tracking-tight">Resona</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
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
                  className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
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
                  <Search className="w-4 h-4 text-text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 bg-surface-alt border border-transparent rounded-full text-sm focus:outline-none focus:border-primary/30 focus:bg-surface transition-all w-32 focus:w-48"
                  />
                </div>
                <Link 
                  href="/mentorship"
                  className="p-2.5 rounded-full hover:bg-surface-alt transition-colors relative group"
                  title="Inbox"
                >
                  <Mail className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-surface" />
                </Link>

                <div className="relative">
                  <button 
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className={`p-2.5 rounded-full transition-all relative ${isNotificationsOpen ? 'bg-surface-alt text-primary' : 'hover:bg-surface-alt text-text-secondary'}`}
                  >
                    <Bell className="w-5 h-5" />
                    <div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-primary rounded-full border-2 border-surface" />
                  </button>

                  {/* Notification Popover */}
                  {isNotificationsOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)} />
                      <div className="absolute top-full right-0 mt-3 w-80 bg-surface border border-border rounded-2xl shadow-elevated z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                        <div className="p-4 border-b border-border flex items-center justify-between bg-surface-alt">
                          <span className="text-xs font-bold text-text-secondary">Quick Alerts</span>
                          <button className="text-[10px] font-bold text-primary hover:underline">Mark all read</button>
                        </div>
                        <div className="max-h-[350px] overflow-y-auto">
                          {[
                            { id: 1, title: 'New Peer Review', desc: 'Dr. Aris Thorne commented on your publication.', time: '2m ago', unread: true },
                            { id: 2, title: 'Match Alert', desc: 'A new researcher aligns with your Quantum Ethics project.', time: '1h ago', unread: true },
                            { id: 3, title: 'Grant Opportunity', desc: 'National Science Foundation released a new RFP.', time: '3h ago', unread: false },
                            { id: 4, title: 'Citation Spike', desc: 'Your 2023 paper received 5 new citations today.', time: '5h ago', unread: false },
                            { id: 5, title: 'Collaboration Invite', desc: 'Sarah Jenkins wants to discuss a joint paper.', time: '8h ago', unread: false },
                          ].map((notif) => (
                            <div key={notif.id} className={`p-4 border-b border-border hover:bg-surface-alt transition-colors cursor-pointer group relative ${notif.unread ? 'bg-primary/[0.02]' : ''}`}>
                              {notif.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="text-[11px] font-black text-text-primary uppercase tracking-wider">{notif.title}</h4>
                                <span className="text-[9px] font-medium text-text-secondary">{notif.time}</span>
                              </div>
                              <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{notif.desc}</p>
                            </div>
                          ))}
                        </div>
                        <Link 
                          href="/mentorship" 
                          onClick={() => setIsNotificationsOpen(false)}
                          className="block p-4 text-center text-xs font-bold text-text-secondary hover:text-primary hover:bg-surface-alt transition-all border-t border-border"
                        >
                          View all activity
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-surface-alt text-text-secondary transition-all"
                  title="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Link 
                  href="/upload"
                  className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors shadow-sm mx-2 active:scale-95"
                >
                  Create / Post
                </Link>
                <div className="relative group">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-primary transition-all shadow-sm block focus:outline-none"
                  >
                    <img src="/avatar_aris.png" alt="Profile" className="w-full h-full object-cover" />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                      <div className="absolute top-full right-0 mt-3 w-64 bg-surface border border-border rounded-xl shadow-elevated z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col py-2">
                        <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-alt hover:text-text-primary transition-colors flex items-center gap-3">
                          <User className="w-4 h-4 text-text-secondary" /> My Profile
                        </Link>
                        <Link href="/settings" onClick={() => setIsProfileOpen(false)} className="px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-alt hover:text-text-primary transition-colors flex items-center gap-3">
                          <Settings className="w-4 h-4 text-text-secondary" /> Workspace Settings
                        </Link>
                        
                        <div 
                          className="px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-alt transition-colors flex items-center justify-between cursor-pointer" 
                          onClick={() => setIsDyslexic(!isDyslexic)}
                        >
                          <div className="flex items-center gap-3">
                            <Accessibility className="w-4 h-4 text-text-secondary" /> Dyslexic-Friendly Font
                          </div>
                          <div className={`w-8 h-4 rounded-full relative transition-colors ${isDyslexic ? 'bg-primary' : 'bg-border'}`}>
                            <div className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-surface transition-transform ${isDyslexic ? 'translate-x-4' : 'translate-x-0'}`} />
                          </div>
                        </div>
                        
                        <hr className="border-border my-1" />
                        
                        <button onClick={() => setIsProfileOpen(false)} className="w-full px-4 py-2.5 text-sm font-medium text-left text-primary hover:bg-surface-alt transition-colors flex items-center gap-3">
                          <LogOut className="w-4 h-4" /> Log Out
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-surface-alt text-text-secondary transition-all"
                  title="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <Link href="/auth" className="text-sm font-bold text-text-primary hover:text-primary transition-colors">
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
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 text-left text-lg font-bold py-2 border-b border-border text-text-secondary hover:text-primary"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
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
                    className="text-left text-lg font-bold py-2 border-b border-border text-text-secondary hover:text-primary"
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
                  className="text-left text-lg font-bold py-2 border-b border-border text-text-secondary hover:text-primary"
                >
                  {item}
                </a>
              ))
            )}
            {!isAuthenticated && (
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-center text-text-primary font-bold hover:text-primary transition-colors">Log In</Link>
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
                <div className="flex items-center gap-3 mb-4 text-text-primary">
                  <OrbitalLogo className="h-6 w-6" />
                  <span className="text-lg font-bold font-serif tracking-tight">Resona</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Empowering the academic world through intelligent matchmaking and seamless collaboration.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-sm">Platform</h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  <li><Link href="/matching" className="hover:text-primary transition-colors">Matching Hub</Link></li>
                  <li><Link href="/problems" className="hover:text-primary transition-colors">Research Problems</Link></li>
                  <li><Link href="/funding" className="hover:text-primary transition-colors">Grant Directory</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm">Resources</h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm">Company</h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-secondary uppercase tracking-wider font-bold">
              <p>© 2026 Resona Academic Platform. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      )}
      {/* Voice Assistant Floating Widget */}
      {voiceAssistantEnabled && isAuthenticated && (
        <>
          {/* Expanded Panel */}
          {voiceAssistantOpen && (
            <>
              <div className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-sm" onClick={() => { setVoiceAssistantOpen(false); setVoiceListening(false); }} />
              <div className="fixed bottom-24 right-8 z-[85] w-80 bg-surface border border-border rounded-2xl shadow-elevated animate-in slide-in-from-bottom-4 fade-in zoom-in-95 duration-300 overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mic className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary">Resona Voice</h3>
                      <p className="text-[10px] font-semibold text-text-secondary">AI Assistant</p>
                    </div>
                  </div>
                  <button onClick={() => { setVoiceAssistantOpen(false); setVoiceListening(false); }} className="p-1.5 rounded-full hover:bg-surface-alt text-text-secondary transition-all">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Transcript Area */}
                <div className="px-5 py-5 min-h-[120px] flex flex-col items-center justify-center">
                  {voiceListening ? (
                    <>
                      <div className="flex items-center gap-1.5 mb-3">
                        {[0,1,2,3,4].map(i => (
                          <div
                            key={i}
                            className="w-1 bg-primary rounded-full animate-pulse"
                            style={{
                              height: `${12 + Math.random() * 18}px`,
                              animationDelay: `${i * 0.15}s`,
                              animationDuration: '0.6s',
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-xs font-bold text-primary animate-pulse">Listening...</p>
                      <p className="text-[10px] text-text-secondary mt-1">Try saying a command below</p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-surface-alt border border-border flex items-center justify-center mb-3">
                        <Mic className="w-5 h-5 text-text-secondary" />
                      </div>
                      <p className="text-xs font-semibold text-text-secondary text-center">Tap the microphone below to start speaking</p>
                    </>
                  )}
                </div>

                {/* Suggested Commands */}
                <div className="px-5 pb-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-text-secondary mb-2.5">Suggested Commands</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['"Read my feed"', '"Open workspace"', '"Search grants"', '"Go to settings"'].map(cmd => (
                      <span key={cmd} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-surface-alt text-text-secondary border border-border">
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mic Button */}
                <div className="px-5 pb-5 flex justify-center">
                  <button
                    onClick={() => setVoiceListening(!voiceListening)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                      voiceListening
                        ? 'bg-primary text-white ring-4 ring-primary/20 scale-110'
                        : 'bg-surface-alt text-text-secondary hover:bg-primary hover:text-white border border-border'
                    }`}
                  >
                    {voiceListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* FAB Trigger */}
          <button
            onClick={() => setVoiceAssistantOpen(!voiceAssistantOpen)}
            className={`fixed bottom-8 right-8 z-[85] w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-all hover:scale-110 active:scale-95 ${
              voiceAssistantOpen
                ? 'bg-primary text-white ring-4 ring-primary/20'
                : 'bg-surface text-primary border border-border hover:border-primary'
            }`}
            title="Voice Assistant"
          >
            <Mic className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default Layout;
