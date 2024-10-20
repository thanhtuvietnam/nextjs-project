// import { cn, convertToSlug } from '@/lib/utils';
// import { AnimatePresence, motion } from 'framer-motion';
// import Link from 'next/link';
// import PropTypes from 'prop-types';
// import React from 'react';
//
// const menuVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: 20 },
// };
//
// const transition = {
//   // duration: 0.5,
//   // ease: [0.25, 0.1, 0.25, 1],
//   // type: 'spring',
//   // mass: 0.5,
//   // damping: 10, // Increase damping for smoother effect
//   // stiffness: 100, // Decrease stiffness for less bounce
//   duration: 0.3,
//   ease: 'easeInOut', // Use easeInOut for a smooth slide
//   type: 'tween', // Use tween for a linear transition
// };
//
// export const MenuItemLists = ({
//   item,
//   activeItem,
//   setActive,
//   children,
//   isActive,
// }) => {
//   const handleInteraction = () => {
//     setActive(item);
//   };
//   return (
//     <li
//       className={cn('menu-item', isActive ? 'bg-blue-500 text-white' : '')}
//       onClick={handleInteraction}
//       onMouseEnter={handleInteraction}
//       // onMouseLeave={() => setActive(null)}
//     >
//       <div>
//         <motion.p
//           className="flex items-center"
//           // className={cn(isActive === item ? 'bg-blue-500 text-white' : '')}
//           transition={{ duration: 0.3 }}
//         >
//           {/* <TriggerWrapper> */}
//           {item}
//           {/* </TriggerWrapper> */}
//         </motion.p>
//         <AnimatePresence>
//           {activeItem === item && (
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={transition}
//             >
//               <div className={cn('navbar-submenu')}>
//                 <motion.div
//                   transition={transition}
//                   layoutId="active"
//                   className={cn(
//                     'navbar-submenu-item',
//                     'shadow-xl backdrop-blur-sm'
//                   )}
//                 >
//                   <motion.div layout className="h-full w-max p-4">
//                     {children}
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </li>
//   );
// };
//
// MenuItemLists.propTypes = {
//   item: PropTypes.string,
//   children: PropTypes.node,
//   activeItem: PropTypes.string,
//   setActive: PropTypes.func,
// };
//
// export const MenuItemWithSubItems = ({
//   item,
//   slug,
//   activeItem,
//   setActive,
//   subItems,
//   activeSubItem,
//   setActiveSubItem,
//   // isActive,
// }) => {
//   // const isActive = activeSubItem !== null; // Kiểm tra xem có mục con nào đang được chọn không
//   const isActive = activeItem === item;
//   return (
//     <MenuItemLists
//       item={item}
//       slug={slug}
//       activeItem={activeItem}
//       setActive={setActive}
//       // isActive={activeItem === item}
//       isActive={isActive}
//     >
//       <ul className={cn('navbar-submenu-item-subitem')}>
//         {subItems.map((subItem, subIndex) => (
//           <li key={subIndex}>
//             <Link
//               href={`/${slug}/${convertToSlug(subItem)}`}
//               onClick={() => {
//                 setActiveSubItem(subItem); // Cập nhật activeSubItem khi click
//                 // setActive(item); // Cập nhật activeItem khi click vào mục con
//               }}
//               className={cn(
//                 activeSubItem === subItem ? 'bg-blue-500 text-white' : ''
//               )}
//             >
//               {subItem}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </MenuItemLists>
//   );
// };
//
// MenuItemWithSubItems.propTypes = {
//   subItems: PropTypes.arrayOf(PropTypes.string),
//   item: PropTypes.string,
//   slug: PropTypes.string,
//   setActive: PropTypes.func,
//   activeItem: PropTypes.string,
// };
//
// export const MenuItemWithoutSubItems = ({
//   isActive,
//   setActive,
//   item,
//   slug,
// }) => (
//   <li className={cn('menu-item', isActive ? 'bg-blue-500 text-white' : '')}>
//     <Link href={`/${slug}`} onClick={setActive}>
//       {item}
//     </Link>
//   </li>
// );
//
// MenuItemWithoutSubItems.propTypes = {
//   item: PropTypes.string,
//   slug: PropTypes.string,
//   isActive: PropTypes.bool,
//   setActive: PropTypes.func,
// };

// export const Trigger = ({ children, className }) => {
//   return (
//     <>
//       <span className={cn('', className)}>{children}</span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200" // Sử dụng tailwindcss để định dạng
//         aria-hidden="true"
//       >
//         <path d="m6 9 6 6 6-6" />
//       </svg>
//     </>
//   );
// };

import { cn, convertToSlug } from '@/lib/utils';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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

  const hrefSubItem = subItem =>
    `/${convertToSlug(state.activeTab)}/${convertToSlug(subItem)}`;

  const subMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  const transition = {
    duration: 0.5,
    type: 'spring',
    ease: easeInOut,
    mass: 0.5,
    damping: 10,
    stiffness: 100,
  };
  const transitionB = {
    // duration: 0.5,
    // ease: [0.25, 0.1, 0.25, 1],
    // type: 'spring',
    // mass: 0.5,
    // damping: 10, // Increase damping for smoother effect
    // stiffness: 100, // Decrease stiffness for less bounce
    duration: 0.3,
    ease: 'easeInOut', // Use easeInOut for a smooth slide
    type: 'tween', // Use tween for a linear transition
  };

  //func
  const handleMouseLeave = () => {
    setPosition({ ...state.position, opacity: 0 });
    setActiveTab(null);
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className={cn(
        'navbar-links'
        // 'relative flex w-full justify-between rounded-full border-2 border-black p-1.5'
      )}
    >
      {tabs.map((tabItem, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          tabItem={tabItem}
          activeTab={state.activeTab}
          setActiveTab={setActiveTab}
          clickedTab={state.clickedTab}
          setClickedTab={setClickedTab}
          clickedSubItem={state.clickedSubItem}
          setClickedSubItem={setClickedSubItem}
        />
      ))}
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
                transition={transitionB}
                className={cn(
                  'navbar-submenu-subitem',
                  'hover:bg-white',
                  state.clickedSubItem === subItem ? 'bg-black' : ''
                )}
                onClick={() => setClickedSubItem(subItem)}
              >
                <Link
                  className={cn(
                    'px-4 py-2',
                    state.clickedSubItem === subItem
                      ? 'opacity-100'
                      : 'opacity-80'
                  )}
                  href={hrefSubItem(subItem)}
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
        'relative z-10 block px-5 py-3',
        'transition duration-300',
        // clickedTab === tabItem ||
        //   (['THỂ LOẠI', 'QUỐC GIA'].includes(tabItem) &&
        //     clickedTab === tabItem &&
        //     clickedSubItem)
        borderClicked ? 'rounded-full border-b-4 border-red-500' : ''
      )}
    >
      {['THỂ LOẠI', 'QUỐC GIA'].includes(tabItem) ? (
        <span>{tabItem}</span>
      ) : (
        <Link className="py-3" href={itemHref}>
          {tabItem}
        </Link>
      )}
    </li>
  );
}

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className={cn('cursor', 'h-7 md:h-12')}
    />
  );
};
export default NavbarUi;
