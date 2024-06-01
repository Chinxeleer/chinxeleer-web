import Link from "next/link";
import React from "react";

const Nav = () => {
  const pageLinks = [
    { link: "/about", text: "About" },
    { link: "/blog", text: "Blog" },
    { link: "/resume", text: "Resume" },
    { link: "/projects", text: "Projects" },
  ];
  return (
    <header>
      <nav className="flex justify-center">
        <ul className="flex gap-2 p-1 rounded-lg shadow-xl">
          {pageLinks.map((item, index) => {
            return (
              <li
                key={index}
                className="rounded-lg font-extrabold hover:underline  underline-offset-8 decoration-2 px-4 py-2"
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
