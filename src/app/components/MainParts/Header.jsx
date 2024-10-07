import React from 'react';
import { TextHoverEffect } from '@/app/components/ui/TextHoverEffect';
import '@/app/styles/css/header.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/Logolight.jpg';
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="logoCuongPhim" width={70} height={70} />
          <TextHoverEffect text="Cuồng Phim" />
        </Link>
        <div className="line-effect " />
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Search with 1000 movie"
          className="header-search-input"
        />
        <button className="header-search-button">Search</button>
      </div>
      <div className="header-user">
        <button className="header-user-login">Login</button>
        <button className="header-user-favorite">Phim yeu thich (0)</button>
      </div>
    </header>
  );
}

export default Header;
