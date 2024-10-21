import { cn, convertToSlug } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Tab from './Tab';

//các biến và hằng số ra ngoài component để tránh tạo lại mỗi lần render
const subMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
const transition = {
  duration: 0.5,
  type: 'spring',
  ease: 'easeInOut',
  mass: 0.5,
  damping: 10,
  stiffness: 100,
};
const transitionB = {
  duration: 0.3,
  ease: 'easeInOut', // Use easeInOut for a smooth slide
  type: 'tween', // Use tween for a linear transition
};

function NavbarUi({
  tabs,
  subMenus,
  state,
  setPosition,
  setActiveTab,
  setClickedTab,
  setClickedSubItem,
}) {
  //variables
  //
  // Chuyển hàm hrefSubItem vào trong map để tránh tạo lại mỗi lần render
  // const hrefSubItem = subItem =>
  //   `/${convertToSlug(state.activeTab)}/${convertToSlug(subItem)}`;

  //func
  const handleMouseLeave = () => {
    setPosition({ ...state.position, opacity: 0 });
    setActiveTab(null);
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className={cn('navbar-links', 'dark:navbar-dark')}
    >
      {tabs.map((tabItem, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          tabItem={tabItem}
          activeTab={state.activeTab}
          clickedTab={state.clickedTab}
          clickedSubItem={state.clickedSubItem}
          setActiveTab={setActiveTab}
          setClickedTab={setClickedTab}
          setClickedSubItem={setClickedSubItem}
        />
      ))}
      {/* Submenu */}
      <AnimatePresence>
        {state.activeTab && subMenus[state.activeTab] && (
          <motion.ul
            variants={subMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={transition}
            className={cn('navbar-submenu')}
            style={{ left: state.position.left }}
          >
            <div className="absolute -top-6 z-10 h-6 w-full bg-transparent" />
            <motion.div className="absolute -top-3 left-[12.5%] h-0 w-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-dark-main-acliceBlue" />

            {subMenus[state.activeTab].map((subItem, subIndex) => (
              <motion.li
                key={subIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={transition}
                className={cn(
                  'navbar-submenu-subitem',
                  'hover:border-r-8 dark:border-dark-main-deepCerise',
                  state.clickedSubItem === subItem
                    ? 'dark:border-r-8 dark:border-dark-semantic-springGreen dark:bg-black'
                    : ''
                )}
                onClick={() => setClickedSubItem(subItem)}
              >
                <Link
                  className={cn(
                    'px-4 py-2 hover:opacity-100',
                    state.clickedSubItem === subItem
                      ? 'opacity-100 dark:text-orange-500'
                      : 'opacity-60'
                  )}
                  // href={hrefSubItem(subItem)}
                  href={`/${convertToSlug(state.activeTab)}/${convertToSlug(subItem)}`}
                >
                  {subItem}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <Cursor position={state.position} />
    </ul>
  );
}

// Sử dụng React.memo để tránh re-render không cần thiết
const Cursor = React.memo(({ position }) => (
  <motion.li animate={position} className={cn('cursor', 'h-7 md:h-12')} />
));

Cursor.displayName = Cursor;

Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number,
    width: PropTypes.number,
    opacity: PropTypes.number,
  }),
};

NavbarUi.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  subMenus: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  state: PropTypes.shape({
    position: PropTypes.shape({
      left: PropTypes.number,
      width: PropTypes.number,
      opacity: PropTypes.number,
    }),
    activeTab: PropTypes.string,
    clickedTab: PropTypes.string,
    clickedSubItem: PropTypes.string,
  }),
  setPosition: PropTypes.func,
  setActiveTab: PropTypes.func,
  setClickedTab: PropTypes.func,
  setClickedSubItem: PropTypes.func,
};

export default NavbarUi;
