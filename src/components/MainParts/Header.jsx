import { Logo, ThemeToggle } from '@/components/Common/index';
import Link from 'next/link';
import React from 'react';
import { TextHoverEffect } from '../Ui/SideEffect/TextHoverEffect';
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper layout-arrange">
        <div className="header-logo">
          <Link href="/" className="flex items-center">
            <Logo className="p-0 md:w-16" width={50} height={50} />
            <TextHoverEffect
              text="Cuồng Phim"
              className="ml-1 stroke-[#0cc2ff] font-bold sm:text-base md:text-xl lg:text-2xl"
            />
          </Link>
          <div className="line-effect" />
        </div>
        <div className="header-search hidden sm:flex">
          <input
            type="text"
            placeholder="Search with 1000 movie"
            className="header-search-input"
          />
          <button className="header-search-button">Search</button>
        </div>
        <div className="header-user">
          <button className="header-user-login">Login</button>
          <button className="header-user-favorite hidden lg:flex">
            Phim yeu thich (0)
          </button>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
