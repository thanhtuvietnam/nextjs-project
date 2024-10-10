'use client';
import { DropDown } from '@/app/components/Common/index';
import useClickOutside from '@/hook/useClickOutSide';
import { convertToSlug } from '@/lib/utils';
import { navLists } from '@/utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useRef } from 'react';

function Navbar() {
  const router = useRouter();
  const navBarRef = useRef();
  const {
    isOpen: isOpenNav,
    toggleDropdown: toggleDropdownNav,
    dropdownRef: dropdownRefNav,
    closeDropdown: closeDropdownNav,
  } = useClickOutside([navBarRef], 'mousedown');

  const navListSlug = useMemo(() => navLists.map(convertToSlug), []);
  // console.log(navListSlug);
  //onclick for first 5 index;
  const handleItemClick = useCallback(() => {
    console.log('handle itemclick');
  }, []);
  const handleClick = useCallback(navList => {
    toggleDropdownNav(navList);
  }, []);

  const genres = ['Hành động', 'Tình cảm', 'Hài hước'];
  const countries = ['Mỹ', 'Hàn Quốc', 'Nhật Bản'];

  const renderItem = useCallback((item, index, onItemClick) => {
    return (
      <Link
        href={`/${convertToSlug(item)} `}
        onClick={() => {
          onItemClick && onItemClick(item);
        }}
      >
        {item}
      </Link>
    );
  }, []);

  return (
    <>
      <nav className="navbar layout-arrange">
        {/* Desktop Navigation */}
        <div className="navbar-container">
          <div className="navbar-left">
            <ul className="navbar-links">
              {navLists.map((navList, index) => (
                <li key={index}>
                  {navList === 'THỂ LOẠI' || navList === 'QUỐC GIA' ? (
                    <div
                      className={`cursor-pointer`}
                      // onMouseEnter={() => toggleDropdownNav(navList)}
                      // onMouseLeave={() => closeDropdownNav(navList)}
                      onClick={() => handleClick(navList)}
                    >
                      {navList}
                    </div>
                  ) : (
                    <Link
                      href={`/${navListSlug[index]}`}
                      onClick={handleItemClick}
                    >
                      {navList}
                    </Link>
                  )}
                  {isOpenNav === navList && (
                    <DropDown
                      items={navList === 'THỂ LOẠI' ? genres : countries}
                      // dropdownRef={dropdownRefNav}
                      renderItem={renderItem}
                      // isVisible={}
                    />
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

{
  /* <Button */
}
{
  /*   borderRadius="2rem" */
}
{
  /*   containerClassName="w-64" */
}
{
  /*   borderClassName="bg-gradient-to-r from-purple-500 to-blue-500" */
}
{
  /*   duration={3000} */
}
{
  /*   className="text-lg font-bold" */
}
{
  /* > */
}
{
  /*   Custom Moving Border Button */
}
{
  /* </Button> */
}
