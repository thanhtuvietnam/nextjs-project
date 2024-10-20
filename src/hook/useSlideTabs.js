import { useState } from 'react';

const useSlideTabs = () => {
  const [state, setState] = useState({
    position: {
      left: 0,
      width: 0,
      opacity: 0,
    },
    activeTab: null,
    clickedTab: 'TRANG CHỦ',
    clickedSubItem: null,
  });

  const setPosition = position => {
    setState(prevState => ({ ...prevState, position }));
  };

  const setActiveTab = activeTab => {
    setState(prevState => ({ ...prevState, activeTab }));
  };

  const setClickedTab = clickedTab => {
    setState(prevState => ({
      ...prevState,
      clickedTab,
      clickedSubItem: null,
    }));
  };

  const setClickedSubItem = clickedSubItem => {
    setState(prevState => ({
      ...prevState,
      clickedSubItem,
      clickedTab: state.activeTab,
    }));
  };

  return {
    state,
    setPosition,
    setActiveTab,
    setClickedTab,
    setClickedSubItem,
  };
};

export default useSlideTabs;
