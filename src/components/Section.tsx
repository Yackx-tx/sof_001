import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  dark?: boolean;
}

export const Section = ({ children, dark = false, className = '', ...props }: SectionProps) => {
  const bgColor = dark ? 'bg-primary text-white' : 'bg-gray-50';

  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`} {...props}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
