'use client';

import { Dropdown } from '@/app/components/Common/index';
import { useClickOutside, useHover, useToggle } from '@/hook/index';
import { cn, convertToSlug } from '@/lib/utils';
import { navBarItems } from '@/utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useRef, useState } from 'react';

function Navbar() {
  //variable
  const navListSlug = useMemo(
    () => navBarItems?.navLists?.map(convertToSlug),
    []
  );

  //hook
  const router = useRouter();

  const {
    isOpen: openSubmenu,
    toggleState: toggleOneWay,
    toggleItems: toggleItemSubmenu,
  } = useToggle(null);
  const { ref: subMenuHoverRef, hovered: hoveredSubmenu } = useHover();
  const ref = useClickOutside(() => toggleItemSubmenu(false), ['mousedown']);
  const [hoveredItem, setHoveredItem] = useState(null);
  // console.log(navListSlug);

  //function
  //onclick for first 5 index;
  const handleItemClick = useCallback(item => {
    // console.log(`Clicked on ${item}`);
  }, []);
  //handle for theloai && quocgia

  // const handleSubmenu = useCallback(
  //   navList => {
  //     toggleItemSubmenu(navList);
  //   },
  //   [toggleItemSubmenu]
  // );
  const handleSubmenu = useCallback(
    navList => {
      setHoveredItem(navList);
      toggleItemSubmenu(navList);
    },
    [toggleItemSubmenu]
  );
  const handleHover = useCallback(
    navList => {
      setHoveredItem(navList);
      if (!openSubmenu) {
        toggleItemSubmenu(navList);
      }
    },
    [openSubmenu, toggleItemSubmenu]
  );
  const handleHoverExit = useCallback(() => {
    setHoveredItem(null);
  }, []);
  // const renderDropdown = useCallback(
  //   (index, navList) => {
  //     if (openSubmenu === navList) {
  //       return (
  //         <Dropdown
  //           className={cn('navbar-submenu-item')}
  //           navList={navList}
  //           hrefNav={navListSlug[index]}
  //         />
  //       );
  //     }
  //     return null;
  //   },
  //   [openSubmenu, navListSlug]
  // );
  const renderDropdown = useCallback(
    (index, navList) => {
      // Chỉ hiển thị dropdown nếu đang được hover hoặc được mở (click)
      if (hoveredItem === navList || openSubmenu === navList) {
        return (
          <Dropdown
            className={cn('navbar-submenu-item')}
            navList={navList}
            hrefNav={navListSlug[index]}
          />
        );
      }
      return null;
    },
    [openSubmenu, hoveredItem, navListSlug]
  );
  return (
    <>
      <nav className="navbar layout-arrange" ref={ref}>
        {/* Desktop Navigation */}
        <div className="navbar-container">
          <div className="navbar-left">
            <ul className="navbar-links">
              {navBarItems?.navLists?.map((navList, index) => (
                <li key={index}>
                  {navList === 'THỂ LOẠI' || navList === 'QUỐC GIA' ? (
                    <div
                      className={cn('navbar-submenu')}
                      onMouseEnter={() => handleHover(navList)}
                      onMouseLeave={handleHoverExit}
                    >
                      <span
                        onMouseEnter={() => handleSubmenu(navList)}
                        onClick={() => handleSubmenu(navList)}
                      >
                        {navList}
                      </span>
                      {renderDropdown(index, navList)}
                    </div>
                  ) : (
                    <Link
                      href={`/${navListSlug[index]}`}
                      onClick={() => handleItemClick(navList)}
                    >
                      {navList}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-right">navbar-right</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
