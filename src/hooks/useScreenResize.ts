import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SCREEN_WIDTH_THRESHOLD = 1023;

const useScreenSize = (): { isSmallScreen: boolean } => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScreenSizeDebounced = useDebouncedCallback((isSmall: boolean) => {
    setIsSmallScreen(isSmall);
  }, 300);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-width: ${String(SCREEN_WIDTH_THRESHOLD)}px)`,
    );

    // Set the initial screen size based on the current viewport width.
    // This ensures `isSmallScreen` is accurate even if no resize events occur.
    setIsSmallScreen(mediaQueryList.matches);

    const handleScreenWidthChange = (event: MediaQueryListEvent): void => {
      updateScreenSizeDebounced(event.matches);
    };

    mediaQueryList.addEventListener('change', handleScreenWidthChange);

    return (): void => {
      mediaQueryList.removeEventListener('change', handleScreenWidthChange);
    };
  }, [updateScreenSizeDebounced]);

  return { isSmallScreen };
};

export default useScreenSize;
