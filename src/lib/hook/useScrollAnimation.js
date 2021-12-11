import { useCallback, useEffect, useRef } from 'react';

const useScrollAnimation = (direction) => {
  const dom = useRef();

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        current.style.transitionDuration = '.3s';
        current.style.opacity = 1;
        if (direction === 'scale') {
          current.style.transform = 'scale(1)';
        }
        if (direction === 'trans') {
          current.style.transform = 'translate3d(0, 0, 0)';
        }
      }
    },
    [direction]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
    },
  };
};

export default useScrollAnimation;
