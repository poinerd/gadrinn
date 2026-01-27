import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Heading({
  level = 2,
  children,
  className = '',
  gradient = false
}: HeadingProps) {
  const sizes = {
    1: 'text-5xl sm:text-6xl lg:text-7xl',
    2: 'text-4xl sm:text-5xl',
    3: 'text-3xl sm:text-4xl',
    4: 'text-2xl sm:text-3xl',
    5: 'text-xl sm:text-2xl',
    6: 'text-lg sm:text-xl'
  };

  const tagName = `h${level}`;

  return React.createElement(
    tagName as any,
    {
      className: `font-bold leading-tight ${sizes[level]} ${gradient ? 'bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent' : 'text-slate-900'} ${className}`
    },
    children
  );
}
