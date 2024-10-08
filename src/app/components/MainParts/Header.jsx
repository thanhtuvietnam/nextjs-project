import React from 'react';
import { TextHoverEffect } from '@/app/components/ui/TextHoverEffect';
import '@/app/styles/css/header.css';
import Link from 'next/link';
import { ThemeToggle, Logo } from '@/app/components/Common/index';
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <Link href="/" className="flex items-center ">
            <Logo />
            <TextHoverEffect
              text="Cuồng Phim"
              className="font-bold text-xl xs:text-2xl sm:text-3xl  stroke-[#0cc2ff]"
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
