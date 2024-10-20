// 'use client';
// import { useClickOutside } from '@/hook';
// import { cn, convertToSlug } from '@/lib/utils';
// import { navBarItems } from '@/utils/constants';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { MenuItemWithoutSubItems, MenuItemWithSubItems } from '../Ui/NavbarUi';
//
// function NavbarClient() {
//   const defaultSelectedTabIndex = 1;
//   const [currentLink, setCurrentLink] = useState({
//     index: defaultSelectedTabIndex,
//     left: undefined,
//     width: undefined,
//   });
//
//   const [activeItem, setActiveItem] = useState(null);
//
//   const [activeSubItem, setActiveSubItem] = useState(null);
//
//   const navListSlug = navBarItems?.navLists.map(convertToSlug);
//   const ref = useClickOutside(() => setActiveItem(null));
//
//   useEffect(() => {
//     setCurrentLink(() => ({
//       left: document.getElementById('uuu-btn-' + defaultSelectedTabIndex)
//         ?.offsetLeft,
//       width: document
//         .getElementById('uuu-btn-' + defaultSelectedTabIndex)
//         ?.getBoundingClientRect().width,
//       index: defaultSelectedTabIndex,
//     }));
//   }, []);
//
//   return (
//     <ul className="navbar-links" ref={ref}>
//       {navBarItems?.navLists?.map((navList, index) => {
//         const hasSubItems = ['THỂ LOẠI', 'QUỐC GIA'].includes(navList);
//         const isActive = activeItem === index;
//
//         return hasSubItems ? (
//           <MenuItemWithSubItems
//             key={index}
//             item={navList}
//             subItems={navBarItems[navList]}
//             slug={navListSlug[index]}
//             isActive={isActive}
//             setActive={setActiveItem}
//             activeItem={activeItem}
//             activeSubItem={activeSubItem} // Truyền activeSubItem
//             setActiveSubItem={subItem => {
//               setActiveSubItem(subItem);
//             }}
//           />
//         ) : (
//           <MenuItemWithoutSubItems
//             key={index}
//             item={navList}
//             slug={navListSlug[index]}
//             isActive={isActive}
//             setActive={() => setActiveItem(index)}
//           />
//         );
//       })}
//     </ul>
//   );
// }
//
// export default NavbarClient;

'use client';
import React from 'react';
import NavbarUi from './NavbarUi';
import useSlideTabs from '@/hook/useSlideTabs';
import { subMenus, tabs } from '@/utils/constants';

function SlideTabsLogic() {
  const { state, setPosition, setActiveTab, setClickedTab, setClickedSubItem } =
    useSlideTabs();

  return (
    <NavbarUi
      tabs={tabs}
      subMenus={subMenus}
      state={state}
      setPosition={setPosition}
      setActiveTab={setActiveTab}
      setClickedTab={setClickedTab}
      setClickedSubItem={setClickedSubItem}
    />
  );
}

function NavbarClient() {
  return (
    <div>
      <SlideTabsLogic />
    </div>
  );
}

export default NavbarClient;
