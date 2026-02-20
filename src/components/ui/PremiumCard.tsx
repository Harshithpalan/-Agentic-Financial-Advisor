import React from 'react';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`glass-card ${className}`}>
      {title && <h3 className="text-[#2EF2E2] mb-4 font-bold uppercase tracking-[0.2em] text-[10px] opacity-80">{title}</h3>}
      {children}
    </div>
  );
};
