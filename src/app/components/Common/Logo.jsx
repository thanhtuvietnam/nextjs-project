'use client';
import React from 'react';
import Image from 'next/image';
import LogoLight from '@/public/Logolight.png';
import LogoDark from '@/public/Logodark.png';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Logo = ({ width = 70, height = 70 }) => {
  const theme = useSelector(state => state.theme.theme);
  const logo = theme === 'dark' ? LogoLight : LogoDark;

  return (
    <>
      <Image src={logo} alt="logoCuongPhim" width={width} height={height} />
    </>
  );
};

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
