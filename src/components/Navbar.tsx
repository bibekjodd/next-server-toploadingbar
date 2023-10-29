import React from 'react';
import ProgressLink from './ProgressLink';

const navItems: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Space', href: '/space' },
  { title: 'Profile', href: '/profile' },
  { title: 'Login', href: '/login' }
];

export default function Navbar() {
  return (
    <div>
      <header className="page-container mb-12 flex flex-col items-start space-y-5 py-3 md:flex-row  md:items-center md:justify-between md:space-y-0 ">
        <ProgressLink href="/" className="px-6 py-2 text-xl font-bold">
          <span className="">{'<'}</span>
          <span className="text-rose-500">TopLoadingBar</span>
          <span className="text-blue-600">{' />'}</span>
        </ProgressLink>

        <nav className="flex md:space-x-7">
          {navItems.map(({ href, title }) => (
            <ProgressLink key={title} href={href} className="px-4 py-2">
              {title}
            </ProgressLink>
          ))}
        </nav>
      </header>
    </div>
  );
}
