import { useCallback } from 'react';

interface ScrollToOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export function useScrollTo() {
  const scrollTo = useCallback((elementId: string, options: ScrollToOptions = {}) => {
    const { offset = 0, behavior = 'smooth' } = options;

    const element = document.getElementById(elementId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior });
    }
  }, []);

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  const scrollToElement = useCallback((element: HTMLElement, options: ScrollToOptions = {}) => {
    const { offset = 0, behavior = 'smooth' } = options;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior });
  }, []);

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
  };
}
