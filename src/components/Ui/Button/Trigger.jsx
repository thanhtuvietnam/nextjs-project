import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';
import React from 'react';
export const Trigger = ({ tabItem, className, isOpen }) => {
  return (
    <div className={cn('', className)}>
      <span className={cn('')}>{tabItem}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          'relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200',
          isOpen ? 'rotate-180' : 'rotate-0'
        )}
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
};

Trigger.propTypes = {
  tabItem: PropTypes.string,
  className: PropTypes.string,
};
