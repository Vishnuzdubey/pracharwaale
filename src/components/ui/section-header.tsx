import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-2',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}