import React, { useState, useEffect } from 'react';
import { TypewriterText } from '@/components/TypewriterText';
import { TerminalWindow } from '@/components/TerminalWindow';
import { MatrixRain } from '@/components/MatrixRain';
import { HackerNavbar } from '@/components/HackerNavbar';
import { ASCIIArt } from '@/components/ASCIIArt';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [currentTerminalLine, setCurrentTerminalLine] = useState(0);

  const terminalLines = [
    "$ system --initialize",
    "> Loading user interface...",
    "> Establishing secure connection...",
    "> Welcome to the System v2.1.0",
    "> Access granted. Enjoy your stay."
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentTerminalLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTerminalLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentTerminalLine, terminalLines.length]);

  const renderHomeSection = () => (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center z-10 space-y-8 animate-terminal-boot">
        <div className="mb-8">
          <ASCIIArt />
        </div>
        
        {showIntro ? (
          <div className="font-mono text-xl md:text-2xl text-primary">
            <TypewriterText 
              text="Welcome to the System..." 
              delay={150}
              className="neon-glow"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary neon-glow animate-phosphor-glow">
              <span className="glitch" data-text="HACKER">HACKER</span>
            </h1>
            <p className="text-lg md:text-xl font-mono text-terminal-dim max-w-2xl">
              Elite developer | System architect | Digital explorer
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hacker" size="lg" onClick={() => setActiveSection('projects')}>
                View Projects
              </Button>
              <Button variant="matrix" size="lg" onClick={() => setActiveSection('contact')}>
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <TerminalWindow title="about.exe" className="max-w-4xl w-full">
        <div className="space-y-4">
          {terminalLines.slice(0, currentTerminalLine + 1).map((line, index) => (
            <div key={index} className="text-primary">
              {line}
            </div>
          ))}
          
          <div className="mt-8 space-y-4 text-foreground">
            <div className="text-terminal-green">$ cat profile.txt</div>
            <div className="pl-4 space-y-2">
              <p>→ Bethel is a digital explorer passionate about retro computing</p>
              <p>→ Cybersecurity enthusiast and hacker culture aesthetics lover</p>
              <p>→ Building interfaces that feel like forgotten terminals of the future</p>
              <p>→ Always exploring the intersection of vintage tech and modern code</p>
            </div>
            
            <div className="text-terminal-green mt-6">$ ls skills/</div>
            <div className="pl-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Cybersecurity</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Penetration Testing</span>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-primary neon-glow">
          Bethel's Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Matrix FX Engine",
              description: "A tool for generating animated matrix-style code effects",
              tech: "JavaScript • Canvas • CSS Animations",
              status: "ACTIVE"
            },
            {
              title: "Terminal NotePad",
              description: "A minimalist note-taking app in terminal UI",
              tech: "React • Local Storage • Monospace",
              status: "LIVE"
            },
            {
              title: "RetroShell",
              description: "A simulated command-line shell built for nostalgia and learning",
              tech: "TypeScript • Terminal Emulation • Retro",
              status: "BETA"
            }
          ].map((project, index) => (
            <TerminalWindow key={index} title={`project_${index + 1}.exe`}>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-display text-primary">{project.title}</h3>
                  <span className="text-xs text-terminal-green px-2 py-1 border border-terminal-green rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="text-xs text-terminal-dim">{project.tech}</div>
                <div className="flex gap-2 mt-4">
                  <Button variant="terminal" size="sm">View Code</Button>
                  <Button variant="matrix" size="sm">Live Demo</Button>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <TerminalWindow title="contact.exe" className="max-w-2xl w-full">
        <div className="space-y-6">
          <div className="text-terminal-green">$ cat contact_info.txt</div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-terminal-green">→</span>
              <span className="text-primary">Contact:</span>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                mail bethel@protonmail.com
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-terminal-green">→</span>
              <span className="text-primary">GitHub:</span>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                github.com/hacker
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-terminal-green">→</span>
              <span className="text-primary">LinkedIn:</span>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                linkedin.com/in/hacker
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-terminal-green">→</span>
              <span className="text-primary">Location:</span>
              <span className="text-foreground">Cyberspace</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-primary/30">
            <div className="text-terminal-green mb-4">$ echo "Let's collaborate!"</div>
            <div className="flex gap-3">
              <Button variant="hacker" className="flex-1">
                Contact Bethel
              </Button>
              <Button variant="matrix">
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="text-xs text-terminal-dim text-center mt-6">
            <span className="animate-blink">█</span> Always open to new opportunities
          </div>
        </div>
      </TerminalWindow>
    </div>
  );

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'about': return renderAboutSection();
      case 'projects': return renderProjectsSection();
      case 'contact': return renderContactSection();
      default: return renderHomeSection();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MatrixRain />
      <HackerNavbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div className="relative z-10">
        {renderCurrentSection()}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/30 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center text-sm font-mono text-terminal-dim">
            <span className="text-terminal-green">$</span> Last login: Jul 30 2025 from 127.0.0.1 — Welcome back, Bethel.
          </div>
        </div>
      </footer>
      
      {/* Phosphor effect overlay */}
      <div className="phosphor fixed inset-0 pointer-events-none z-0" />
    </div>
  );
};

export default Index;