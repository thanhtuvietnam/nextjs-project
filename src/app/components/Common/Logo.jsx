'use client';
import React from 'react';
import Image from 'next/image';
import LogoLight from '@/public/logo/Logolight.png';
import LogoDark from '@/public/logo/Logodark.png';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Logo = ({ width, height, className }) => {
  const theme = useSelector(state => state.theme.theme);
  const logo = theme === 'dark' ? LogoLight : LogoDark;

  return (
    <>
      <Image
        src={logo}
        alt="logoCuongPhim"
        width={width}
        height={height}
        className={className}
        // priority={true}
      />
    </>
  );
};

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
