interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, id, className = '', dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={`
        py-20 sm:py-24 lg:py-32
        ${dark ? 'bg-slate-900 text-white' : 'bg-white'}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
