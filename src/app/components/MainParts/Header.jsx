import React from 'react';
import { TextHoverEffect } from '@/app/components/ui/TextHoverEffect';
import Link from 'next/link';
import { ThemeToggle, Logo } from '@/app/components/Common/index';
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper layout-arrange">
        <div className="header-logo">
          <Link href="/" className="flex items-center ">
            <Logo className="p-0 md:w-16 " width={50} height={50} />
            <TextHoverEffect
              text="Cuồng Phim"
              className="font-bold sm:text-base md:text-xl lg:text-2xl stroke-[#0cc2ff] ml-1"
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
