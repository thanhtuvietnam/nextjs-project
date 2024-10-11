// 'use client';
// import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { navBarItems, navLists } from '@/utils/constants';
// import { convertToSlug, cn } from '@/lib/utils';

// function Dropdown({ className, hrefNav, navList }) {
//   const hrefSlug = item => `/${hrefNav}/${convertToSlug(item)}`;
//   const items =
//     navList === 'THỂ LOẠI'
//       ? navBarItems?.theLoai
//       : navList === 'QUỐC GIA'
//         ? navBarItems?.quocGia
//         : [];
//   return (
//     <ul className={className}>
//       {Array.isArray(items) &&
//         items.map((item, index) => (
//           <li key={index} className="py-1">
//             <Link href={hrefSlug(item)}>{item}</Link>
//           </li>
//         ))}
//     </ul>
//   );
// }

// export default Dropdown;

// Dropdown.propTypes = {
//   onItemClick: PropTypes.func,
//   className: PropTypes.string,
//   hrefNav: PropTypes.string,
//   navList: PropTypes.string,
// };
'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { navBarItems } from '@/utils/constants';
import { convertToSlug, cn } from '@/lib/utils';

function Dropdown({ className, hrefNav, navList }) {
  const hrefSlug = item => `/${hrefNav}/${convertToSlug(item)}`;
  const items =
    navList === 'THỂ LOẠI'
      ? navBarItems?.theLoai
      : navList === 'QUỐC GIA'
        ? navBarItems?.quocGia
        : [];
  return (
    <ul className={className}>
      {Array.isArray(items) &&
        items.map((item, index) => (
          <li key={index} className="py-1">
            <Link href={hrefSlug(item)}>{item}</Link>
          </li>
        ))}
    </ul>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  hrefNav: PropTypes.string,
  navList: PropTypes.string,
};

export default Dropdown;
