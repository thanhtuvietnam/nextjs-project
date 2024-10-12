'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="shadow-input relative flex justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-6 dark:border-white/[0.2] dark:bg-black"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200"
    >
      {children}
    </Link>
  );
};
// import React, { useState } from 'react';
// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from '@/app/components/ui/NavbarUi';
// import { cn } from '@/lib/utils';
//
// export function NavbarDemo() {
//   return (
//     <div classname="relative flex w-full items-center justify-center">
//       <navbar classname="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }
//
// function Navbar({ className }) {
//   const [active, setActive] = useState(null);
//   return (
//     <div classname="relative flex w-full items-center justify-center">
//       <navbar classname="top-2" />
//       <div
//         className={cn(
//           'fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl',
//           className
//         )}
//       >
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="Services">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/web-dev">Web Development</HoveredLink>
//               <HoveredLink href="/interface-design">
//                 Interface Design
//               </HoveredLink>
//               <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//               <HoveredLink href="/branding">Branding</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Products">
//             <div className="grid grid-cols-2 gap-10 p-4 text-sm">
//               <ProductItem
//                 title="Algochurn"
//                 href="https://algochurn.com"
//                 src="https://assets.aceternity.com/demos/algochurn.webp"
//                 description="Prepare for tech interviews like never before."
//               />
//               <ProductItem
//                 title="Tailwind Master Kit"
//                 href="https://tailwindmasterkit.com"
//                 src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//                 description="Production ready Tailwind css components for your next project"
//               />
//               <ProductItem
//                 title="Moonbeam"
//                 href="https://gomoonbeam.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//                 description="Never write from scratch again. Go from idea to blog in minutes."
//               />
//               <ProductItem
//                 title="Rogue"
//                 href="https://userogue.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//                 description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//               />
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Pricing">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/hobby">Hobby</HoveredLink>
//               <HoveredLink href="/individual">Individual</HoveredLink>
//               <HoveredLink href="/team">Team</HoveredLink>
//               <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// }
// export default Navbar;
