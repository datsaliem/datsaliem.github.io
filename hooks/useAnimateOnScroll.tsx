import { useState, useEffect, useRef } from 'react';

// A custom hook to detect when an element is scrolled into view and trigger an animation.
// It returns a ref to be attached to the element and a boolean indicating if it's visible.
// The animation is only triggered once for performance.
export const useAnimateOnScroll = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  // Specify HTMLElement for the ref for better type safety with DOM elements.
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (in view), update the state.
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe it anymore.
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        // Trigger when 10% of the element is visible.
        threshold: 0.1, 
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve the element when the component unmounts.
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]); // Re-run effect if options change.

  return [ref, isVisible] as const;
};
