import { useCallback, useEffect, useRef, useState } from 'react';

export default function useHover(initialState) {
  const [hovered, setHovered] = useState(initialState || false);
  const ref = useRef(null);
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
      return () => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      };
    }
    return undefined;
  }, [onMouseLeave, onMouseEnter]);

  return { ref, hovered };
}
