import { useState, useCallback } from 'react';

function useToggle(initialState) {
  const [isOpen, setIsOpen] = useState(initialState || false);

  const toggleState = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  const toggleItems = useCallback(
    items => {
      setIsOpen(isOpen === items ? null : items);
    },
    [isOpen]
  );

  return { isOpen, toggleState, toggleItems };
}

export default useToggle;
