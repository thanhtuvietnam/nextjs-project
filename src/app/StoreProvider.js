'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

import PropTypes from 'prop-types';

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
