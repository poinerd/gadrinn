interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Grid({ 
  children, 
  cols = 1,
  gap = 'md',
  className = ''
}: GridProps) {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6'
  };

  const gapMap = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-8'
  };

  return (
    <div className={`
      grid
      ${colsMap[cols]}
      ${gapMap[gap]}
      md:${colsMap[cols]}
      ${className}
    `}>
      {children}
    </div>
  );
}
