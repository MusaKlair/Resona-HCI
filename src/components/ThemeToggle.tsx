"use client";
import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center bg-surface border border-border rounded-full p-1 shadow-sm transition-all duration-300">
      <button
        onClick={() => setTheme('light')}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-background shadow-md text-primary scale-110' 
            : 'text-text-secondary hover:text-text-primary hover:bg-background/50'
        }`}
        title="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === 'system' 
            ? 'bg-background shadow-md text-primary scale-110' 
            : 'text-text-secondary hover:text-text-primary hover:bg-background/50'
        }`}
        title="System Preference"
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-1.5 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-background shadow-md text-primary scale-110' 
            : 'text-text-secondary hover:text-text-primary hover:bg-background/50'
        }`}
        title="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
