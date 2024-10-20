import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

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
        <div className={cn('navbar-left', 'hidden max-lg:flex')}>
          <span>icon navbar</span>
        </div>
        <div className={(cn('navbar-right'), 'hidden border max-lg:flex')}>
          navbar-right{' '}
        </div>
      </div>
    </nav>
  );
}
export default NavbarServer;
