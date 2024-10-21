import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import SideMenuBtn from '../Ui/Button/SideMenuBtn';

const NavbarClient = dynamic(
  () => import('@/components/Ui/Navbar/NavbarClient'),
  {
    ssr: false,
  }
);

function NavbarServer() {
  return (
    <nav className="navbar layout-arrange">
      <div className="navbar-container">
        <div className={cn('navbar-left', 'hidden lg:flex')}>
          <NavbarClient />
        </div>
        <div className={cn('navbar-left', 'mx-3 hidden max-lg:flex')}>
          <SideMenuBtn />
        </div>
        <div className={(cn('navbar-right'), 'hidden border max-lg:flex')}>
          navbar-right
        </div>
      </div>
    </nav>
  );
}
export default NavbarServer;
