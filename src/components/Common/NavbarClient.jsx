'use client';
import React, { useState } from 'react';
import { navBarItems } from '@/utils/constants';
import { MenuItemWithoutSubItems, MenuItemWithSubItems } from '../ui/NavbarUi';
import { convertToSlug } from '@/lib/utils';

function NavbarClient() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navListSlug = navBarItems?.navLists.map(convertToSlug);

  return (
    <ul className="navbar-links">
      {navBarItems?.navLists?.map((navList, index) => {
        const hasSubItems = ['THỂ LOẠI', 'QUỐC GIA'].includes(navList);
        const isActive = activeItem === index;
        return hasSubItems ? (
          <MenuItemWithSubItems
            key={index}
            item={navList}
            subItems={navBarItems[navList]}
            slug={navListSlug[index]}
            isActive={isActive}
            activeItem={activeItem}
            setActive={setActiveItem}
            activeSubItem={activeSubItem} // Truyền activeSubItem
            setActiveSubItem={setActiveSubItem} // Truyền setActiveSubItem
          />
        ) : (
          <MenuItemWithoutSubItems
            key={index}
            item={navList}
            slug={navListSlug[index]}
            isActive={isActive}
            setActive={() => setActiveItem(index)}
          />
        );
      })}
    </ul>
  );
}

export default NavbarClient;
