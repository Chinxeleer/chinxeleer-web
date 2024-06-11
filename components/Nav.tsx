import Link from "next/link";
import React from "react";

const Nav = () => {
  const pageLinks = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/projects", text: "Projects" },
    { link: "/blog", text: "Blog" },
  ];
  return (
    <nav className="fixed top-0  z-10 w-full flex justify-center">
      <div className="absolute top-0 left-0 right-0 bg-slate-100 bottom-0 blur-md z-10"></div>
      <ul className="relative flex xl:gap-2 top-0 z-20 bg-slate-100 border border-slate-200 md:gap-2 px-2 rounded-full md:mt-2">
        {pageLinks.map((item, index) => {
          return (
            <li
              key={index}
              className="rounded-lg font-extrabold text-slate-800 hover:underline decoration-gray-500  underline-offset-8 decoration-2 xl:px-4 xl:py-2 px-2 py-2"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
