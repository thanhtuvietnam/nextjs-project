'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { convertToSlug } from '@/lib/utils';

function DropDown({ items, isVisible, renderItem, onItemClick, className }) {
  if (!isVisible) return null;
  return (
    <div
      className={`absolute bg-gray-800 p-2 rounded-md shadow-lg ${className}`}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-1">
            {renderItem ? (
              // renderItem(item, index, onItemClick)
              renderItem(item, index, () => {
                onItemClick && onItemClick(item);
              })
            ) : (
              <Link
                href={`/${convertToSlug(item)} `}
                onClick={() => {
                  onItemClick && onItemClick(item);
                }}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isVisible: PropTypes.bool.isRequired,
  renderItem: PropTypes.func,
  onItemClick: PropTypes.func,
  className: PropTypes.string,
};
