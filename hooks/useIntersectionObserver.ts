import { useEffect, useRef } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const defaultOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const useIntersectionObserver = (options: ObserverOptions = defaultOptions) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    };

    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements
    const sections = document.querySelectorAll('section[data-observe]');
    sections.forEach(section => {
      observerRef.current!.observe(section);
    });

    // Cleanup function to disconnect observer
    return () => {
      if (observerRef.current) {
        const sections = document.querySelectorAll('section[data-observe]');
        sections.forEach(section => {
          observerRef.current!.unobserve(section);
        });
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [options.root, options.rootMargin, options.threshold]);
};

export default useIntersectionObserver;