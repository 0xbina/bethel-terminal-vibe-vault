import React from 'react';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  title = "terminal", 
  children, 
  className = "" 
}) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
        </div>
        <div className="w-16"></div>
      </div>
      <div className="p-6 font-mono text-sm">
        {children}
      </div>
    </div>
  );
};