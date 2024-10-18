import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { convertToSlug } from '@/lib/utils';
import { cn } from '@/lib/utils';

const menuVariants = {
  // hidden: { opacity: 0, scale: 0.85, y: 10 },
  // visible: { opacity: 1, scale: 1, y: 0 },
  // exit: { opacity: 0, scale: 0.85, y: 10 },
  // hidden: { opacity: 0, scale: 0.85, x: -20 },
  // visible: { opacity: 1, scale: 1, x: 0 },
  // exit: { opacity: 0, scale: 0.85, x: 0 },
  // hidden: { opacity: 0, scale: 0, x: '-50%', y: '-50%' },
  // visible: { opacity: 1, scale: 1, x: '0%', y: '0%' },
  // exit: { opacity: 0, scale: 0, x: '-50%', y: '-50%' },
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const transition = {
  // duration: 0.5,
  // ease: [0.25, 0.1, 0.25, 1],
  // type: 'spring',
  // mass: 0.5,
  // damping: 10, // Increase damping for smoother effect
  // stiffness: 100, // Decrease stiffness for less bounce
  duration: 0.4,
  ease: 'easeInOut', // Use easeInOut for a smooth slide
  type: 'tween', // Use tween for a linear transition
};

export const MenuItemLists = ({
  item,
  activeItem,
  setActive,
  children,
  isActive,
}) => {
  return (
    <li
      className={cn('menu-item', isActive ? 'bg-blue-500 text-white' : '')}
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
    >
      <div>
        <motion.p
          className={cn(activeItem ? 'bg-blue' : '')}
          transition={{ duration: 0.3 }}
        >
          {item}
        </motion.p>
        <AnimatePresence>
          {activeItem === item && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition}
            >
              <div className={cn('navbar-submenu')}>
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className={cn(
                    'navbar-submenu-item',
                    'shadow-xl backdrop-blur-sm'
                  )}
                >
                  <motion.div layout className="h-full w-max p-4">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

MenuItemLists.propTypes = {
  item: PropTypes.string,
  children: PropTypes.node,
  activeItem: PropTypes.string,
  setActive: PropTypes.func,
};

export const MenuItemWithSubItems = ({
  item,
  slug,
  activeItem,
  setActive,
  subItems,
  activeSubItem,
  setActiveSubItem,
  // isActive,
}) => {
  const isActive = activeSubItem !== null; // Kiểm tra xem có mục con nào đang được chọn không
  return (
    <MenuItemLists
      item={item}
      slug={slug}
      activeItem={activeItem}
      setActive={setActive}
      isActive={isActive}
    >
      <ul className={cn('navbar-submenu-item-subitem')}>
        {subItems.map((subItem, subIndex) => (
          <li key={subIndex}>
            <Link
              href={`/${slug}/${convertToSlug(subItem)}`}
              onClick={() => {
                // setActive = { setActive };
                setActiveSubItem(subItem); // Cập nhật activeSubItem khi click
              }}
              className={cn(
                activeSubItem === subItem ? 'bg-blue-500 text-white' : ''
              )}
            >
              {subItem}
            </Link>
          </li>
        ))}
      </ul>
    </MenuItemLists>
  );
};

MenuItemWithSubItems.propTypes = {
  subItems: PropTypes.arrayOf(PropTypes.string),
  item: PropTypes.string,
  slug: PropTypes.string,
  setActive: PropTypes.func,
  activeItem: PropTypes.string,
};

export const MenuItemWithoutSubItems = ({
  isActive,
  setActive,
  item,
  slug,
}) => (
  <li className={cn('menu-item', isActive ? 'bg-blue-500 text-white' : '')}>
    <Link href={`/${slug}`} onClick={setActive}>
      {item}
    </Link>
  </li>
);

MenuItemWithoutSubItems.propTypes = {
  item: PropTypes.string,
  slug: PropTypes.string,
  isActive: PropTypes.bool,
  setActive: PropTypes.func,
};
