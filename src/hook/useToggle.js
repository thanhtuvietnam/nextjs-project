import { useState, useCallback } from 'react';

function useToggle(initialState) {
  const [isOpen, setIsOpen] = useState(initialState || false);

  const toggleState = useCallback(() => {
    setIsOpen(true);
  }, []);
  const toggleItems = useCallback(
    items => {
      setIsOpen(isOpen === items ? null : items);
    },
    [isOpen]
  );

  return { isOpen, toggleState, toggleItems, setIsOpen };
}

export default useToggle;
