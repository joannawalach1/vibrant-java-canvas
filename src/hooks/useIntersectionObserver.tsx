
import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook that observes when an element enters the viewport
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If the element has already been observed and triggerOnce is true,
    // don't re-observe it
    if (triggerOnce && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If the element has been observed once and triggerOnce is true,
        // unobserve it
        if (entry.isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, isIntersecting]);

  // Return both the ref and the isIntersecting flag
  return { ref, isIntersecting };
};

/**
 * HOC that adds intersection observer to a component and applies animations
 */
export const withIntersectionObserver = <P extends object>(
  Component: React.ComponentType<P>,
  animationClass: string,
  options?: UseIntersectionObserverProps
) => {
  return (props: P) => {
    const { ref, isIntersecting } = useIntersectionObserver(options);
    
    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={isIntersecting ? animationClass : 'opacity-0'}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default useIntersectionObserver;
