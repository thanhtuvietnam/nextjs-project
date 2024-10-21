import { cn, convertToSlug } from '@/lib/utils';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Trigger } from '../Button/Trigger';

function Tab({
  tabItem,
  activeTab,
  setActiveTab,
  setPosition,
  clickedTab,
  setClickedTab,
  clickedSubItem,
}) {
  //variable
  const itemHref = `/${convertToSlug(tabItem)}`;

  const borderClicked =
    clickedTab === tabItem ||
    (['THỂ LOẠI', 'QUỐC GIA'].includes(tabItem) &&
      clickedTab === tabItem &&
      clickedSubItem);

  //func
  const handleMouseEnter = event => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
    setActiveTab(tabItem);
  };

  const handleClickTab = event => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });

    setClickedTab(tabItem);
    setActiveTab(tabItem);
  };
  return (
    <li
      onClick={handleClickTab}
      onMouseEnter={handleMouseEnter}
      className={cn(
        'navbar-menuItem px-5 py-3',
        'transition duration-300',
        'hover:text-dark-background',
        borderClicked
          ? 'rounded-full border-b-4 border-light-main-summerSky dark:border-dark-main-deepCerise'
          : ''
      )}
    >
      {['THỂ LOẠI', 'QUỐC GIA'].includes(tabItem) ? (
        <Trigger
          tabItem={tabItem}
          className={`flex items-center`}
          isOpen={activeTab === tabItem}
        />
      ) : (
        <Link className="py-3" href={itemHref}>
          {tabItem}
        </Link>
      )}
    </li>
  );
}
export default Tab;
Tab.propTypes = {
  tabItem: PropTypes.string,
  activeTab: PropTypes.string,
  clickedTab: PropTypes.string,
  clickedSubItem: PropTypes.string,
  setPosition: PropTypes.func,
  setActiveTab: PropTypes.func,
  setClickedTab: PropTypes.func,
};
