interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-white rounded-lg border border-slate-200 p-6
        ${hover ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
