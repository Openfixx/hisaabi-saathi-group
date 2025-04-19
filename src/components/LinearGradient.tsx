
import React from 'react';

export default function LinearGradient({
  colors,
  children,
  className
}: {
  colors: string[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div 
      className={`gradient-container ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.join(', ')})`,
      }}
    >
      {children}
    </div>
  );
}
