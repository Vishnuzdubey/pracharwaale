import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  description?: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  description,
  image,
  children,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative h-[400px] flex items-center justify-center bg-cover bg-center',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}")`,
      }}
    >
      <div className="container text-center text-white space-y-6">
        <h1 className="text-4xl font-bold leading-tight">{title}</h1>
        {description && (
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}