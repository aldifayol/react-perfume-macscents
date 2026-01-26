import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-pastel-purple text-white hover:bg-pastel-blue dark:hover:bg-pastel-purple/80 shadow',
  secondary:
    'bg-white text-pastel-purple border-2 border-pastel-purple hover:bg-pastel-purple hover:text-white dark:bg-dark-surface dark:text-pastel-blue dark:border-pastel-blue',
  ghost:
    'bg-transparent text-pastel-purple hover:bg-pastel-purple/10 dark:text-pastel-blue dark:hover:bg-pastel-blue/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-full
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-pastel-purple focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
