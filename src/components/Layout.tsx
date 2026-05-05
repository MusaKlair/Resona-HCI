"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // If path is root (/), auth, or onboarding, consider it unauthenticated/public view
  const isPublicPage = pathname === '/' || pathname === '/auth' || pathname === '/onboarding';
  const isAuthenticated = !isPublicPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-soft py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Resona Logo" className="h-10 w-auto object-contain rounded-lg shadow-sm" />
            <span className="text-2xl font-bold font-serif tracking-tight">Resona</span>
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
                    className={`text-sm font-bold transition-colors ${isActive ? 'text-secondary font-black' : 'text-secondary/70 hover:text-secondary'}`}
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
                    className="pl-9 pr-4 py-2 bg-secondary/5 border border-transparent rounded-full text-sm focus:outline-none focus:border-primary/30 focus:bg-white transition-all w-40 focus:w-64"
                  />
                </div>
                <Link 
                  href="/mentorship"
                  className="p-2.5 rounded-full hover:bg-secondary/5 transition-colors relative"
                >
                  <Bell className="w-5 h-5 text-secondary/60" />
                </Link>
                <Link 
                  href="/upload"
                  className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors shadow-sm mx-2"
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
                <Link href="/auth" className="bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors text-sm">
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
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
      <main className="pt-24 min-h-[calc(100vh-400px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-secondary/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Resona Logo" className="h-8 w-auto object-contain rounded-md shadow-sm" />
                <span className="text-xl font-bold font-serif tracking-tight">Resona</span>
              </div>
              <p className="text-secondary/60 text-sm leading-relaxed">
                Empowering the academic world through intelligent matchmaking and seamless collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                <li><Link href="/matching" className="hover:text-primary transition-colors">Matching Hub</Link></li>
                <li><Link href="/problems" className="hover:text-primary transition-colors">Research Problems</Link></li>
                <li><Link href="/funding" className="hover:text-primary transition-colors">Grant Directory</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-secondary/40">
            <p>© 2026 Resona Academic Platform. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
