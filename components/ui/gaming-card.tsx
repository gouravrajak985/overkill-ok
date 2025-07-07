'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

interface GamingCardProps extends ComponentPropsWithoutRef<typeof motion.div> {
  glowColor?: 'purple' | 'cyan' | 'green' | 'orange';
  hover?: boolean;
}

export function GamingCard({ 
  className, 
  glowColor = 'purple', 
  hover = true, 
  children, 
  ...props 
}: GamingCardProps) {
  const glowColors = {
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40 border-purple-500/30',
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40 border-cyan-500/30',
    green: 'shadow-green-500/20 hover:shadow-green-500/40 border-green-500/30',
    orange: 'shadow-orange-500/20 hover:shadow-orange-500/40 border-orange-500/30',
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300',
        'shadow-lg',
        glowColors[glowColor],
        hover && 'hover:scale-105',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}