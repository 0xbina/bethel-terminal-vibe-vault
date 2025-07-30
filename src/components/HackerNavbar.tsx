import React from 'react';
import { Button } from './ui/button';

interface HackerNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const HackerNavbar: React.FC<HackerNavbarProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const sections = [
    { id: 'home', label: 'HOME', symbol: '[>]' },
    { id: 'about', label: 'ABOUT', symbol: '[?]' },
    { id: 'projects', label: 'PROJECTS', symbol: '[#]' },
    { id: 'contact', label: 'CONTACT', symbol: '[&]' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-display text-lg">
            <span className="animate-phosphor-glow">[SYSTEM]</span>
            <span className="text-terminal-dim">v2.1.0</span>
          </div>
          
          <div className="flex items-center gap-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "hacker" : "terminal"}
                size="sm"
                onClick={() => onSectionChange(section.id)}
                className="font-mono"
              >
                <span className="mr-1 text-terminal-green">{section.symbol}</span>
                {section.label}
              </Button>
            ))}
          </div>
          
          <div className="font-mono text-xs text-terminal-dim">
            <span className="animate-blink">█</span>
          </div>
        </div>
      </div>
    </nav>
  );
};