import React from 'react';
import dynamic from 'next/dynamic';

const NavbarClient = dynamic(() => import('@/components/Common/NavbarClient'), {
  ssr: false,
});

function NavbarServer() {
  return (
    <nav className="navbar layout-arrange">
      <div className="navbar-container">
        <div className="navbar-left">
          <NavbarClient />
        </div>
        <div className="navbar-right">navbar-right</div>
      </div>
    </nav>
  );
}
export default NavbarServer;
