
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  animation: 'fade-in' | 'scale-in' | 'slide-in-right' | 'pulse' | 'enter';
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 0.3,
  className = '',
}: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Apply delay if specified
    if (delay) {
      element.style.animationDelay = `${delay}s`;
    }
    
    // Apply custom duration if specified
    if (duration !== 0.3) {
      element.style.animationDuration = `${duration}s`;
    }

    // Add animation class
    element.classList.add(`animate-${animation}`);

    return () => {
      // Clean up animation classes
      element.classList.remove(`animate-${animation}`);
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
