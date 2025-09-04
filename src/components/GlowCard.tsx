import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  hoverGlow = true,
}) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { scale: 1.02 } : {}}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
      <div className="relative bg-terminal-surface border border-terminal-border rounded-lg p-6 hover:border-terminal-green/50 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
};