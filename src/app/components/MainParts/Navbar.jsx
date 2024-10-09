import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <>
      <nav className="navbar layout-arrange">
        <div className="navbar-container">
          <div className="navbar-left">
            <ul className="navbar-links">
              <li>
                <Link href="/">Trang chu</Link>
              </li>
              <li>
                <Link href="">Phim bo</Link>
              </li>
              <li>
                <Link href="">Phim le</Link>
              </li>
              <li>
                <Link href="">Tv Show</Link>
              </li>
              <li>
                <Link href="">Hoat hinh</Link>
              </li>
              <li>
                <Link href="">The loai</Link>
              </li>
              <li>
                <Link href="">Quoc gia</Link>
              </li>
              {/* <li><Link></Link></li> */}
            </ul>
          </div>
          <div className="navbar-right">right</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
