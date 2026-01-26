import type { ReactNode, CSSProperties, ElementType } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type AnimationType = 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | 'slide-in-left' | 'slide-in-right' | 'bounce-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: ElementType;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in': 'animate-fade-in',
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-down': 'animate-fade-in-down',
  'scale-in': 'animate-scale-in',
  'slide-in-left': 'animate-slide-in-left',
  'slide-in-right': 'animate-slide-in-right',
  'bounce-in': 'animate-bounce-in',
};

export function AnimatedSection({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true,
  });

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    animationDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        ${isVisible ? animationClasses[animation] : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </Component>
  );
}
