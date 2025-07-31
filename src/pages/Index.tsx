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
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20 sm:pt-0">
      <div className="text-center z-10 space-y-4 sm:space-y-6 md:space-y-8 animate-terminal-boot max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <ASCIIArt />
        </div>
        
        {showIntro ? (
          <div className="font-mono text-lg sm:text-xl md:text-2xl text-primary">
            <TypewriterText 
              text="Welcome to the System..." 
              delay={150}
              className="neon-glow"
            />
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary neon-glow animate-phosphor-glow">
              <span className="glitch" data-text="HACKER">HACKER</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-mono text-terminal-dim max-w-2xl mx-auto px-4">
              Elite developer | System architect | Digital explorer
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button 
                variant="hacker" 
                size="lg" 
                onClick={() => setActiveSection('projects')}
                className="w-full sm:w-auto min-h-[44px] touch-manipulation"
              >
                View Projects
              </Button>
              <Button 
                variant="matrix" 
                size="lg" 
                onClick={() => setActiveSection('contact')}
                className="w-full sm:w-auto min-h-[44px] touch-manipulation"
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-8">
      <TerminalWindow title="about.exe" className="max-w-4xl w-full">
        <div className="space-y-3 sm:space-y-4">
          {terminalLines.slice(0, currentTerminalLine + 1).map((line, index) => (
            <div key={index} className="text-primary break-all">
              {line}
            </div>
          ))}
          
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-foreground">
            <div className="text-terminal-green">$ cat profile.txt</div>
            <div className="pl-2 sm:pl-4 space-y-2">
              <p className="break-words">→ Bethel is a digital explorer passionate about retro computing</p>
              <p className="break-words">→ Cybersecurity enthusiast and hacker culture aesthetics lover</p>
              <p className="break-words">→ Building interfaces that feel like forgotten terminals of the future</p>
              <p className="break-words">→ Always exploring the intersection of vintage tech and modern code</p>
            </div>
            
            <div className="text-terminal-green mt-4 sm:mt-6">$ ls skills/</div>
            <div className="pl-2 sm:pl-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
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
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 pt-20 sm:pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12 text-primary neon-glow">
          Bethel's Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
            <TerminalWindow key={index} title={`project_${index + 1}.exe`} className="h-full">
              <div className="space-y-3 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg font-display text-primary break-words">{project.title}</h3>
                  <span className="text-xs text-terminal-green px-2 py-1 border border-terminal-green rounded self-start sm:self-auto whitespace-nowrap">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">{project.description}</p>
                <div className="text-xs text-terminal-dim break-words">{project.tech}</div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-3">
                  <Button 
                    variant="terminal" 
                    size="sm" 
                    className="w-full sm:w-auto min-h-[36px] touch-manipulation"
                  >
                    View Code
                  </Button>
                  <Button 
                    variant="matrix" 
                    size="sm" 
                    className="w-full sm:w-auto min-h-[36px] touch-manipulation"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-8">
      <TerminalWindow title="contact.exe" className="max-w-2xl w-full">
        <div className="space-y-4 sm:space-y-6">
          <div className="text-terminal-green break-all">$ cat contact_info.txt</div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-terminal-green">→</span>
                <span className="text-primary">Contact:</span>
              </div>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer break-all touch-manipulation">
                mail bethel@protonmail.com
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-terminal-green">→</span>
                <span className="text-primary">GitHub:</span>
              </div>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer break-all touch-manipulation">
                github.com/hacker
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-terminal-green">→</span>
                <span className="text-primary">LinkedIn:</span>
              </div>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer break-all touch-manipulation">
                linkedin.com/in/hacker
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-terminal-green">→</span>
                <span className="text-primary">Location:</span>
              </div>
              <span className="text-foreground">Cyberspace</span>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/30">
            <div className="text-terminal-green mb-3 sm:mb-4 break-all">$ echo "Let's collaborate!"</div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                variant="hacker" 
                className="flex-1 min-h-[44px] touch-manipulation"
              >
                Contact Bethel
              </Button>
              <Button 
                variant="matrix" 
                className="sm:w-auto min-h-[44px] touch-manipulation"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="text-xs text-terminal-dim text-center mt-4 sm:mt-6">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="text-center text-xs sm:text-sm font-mono text-terminal-dim break-all">
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