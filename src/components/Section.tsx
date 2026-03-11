interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'warm' | 'stone' | 'charcoal';
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    warm: 'bg-warm-white',
    stone: 'bg-warm-gray',
    charcoal: 'bg-charcoal text-white',
  };
  return (
    <section id={id} className={`py-16 sm:py-24 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
