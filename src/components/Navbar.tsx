import React from "react";
import ProgressLink from "./ProgressLink";

const navItems: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Space", href: "/space" },
  { title: "Profile", href: "/profile" },
  { title: "Login", href: "/login" },
];

export default function Navbar() {
  return (
    <div>
      <header className="flex items-center page-container">
        <ProgressLink
          href="/"
          className="mr-auto px-6 py-2 text-xl font-semibold"
        >
          {"<TopLoadingBar/>"}
        </ProgressLink>

        <nav className="flex space-x-7">
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
