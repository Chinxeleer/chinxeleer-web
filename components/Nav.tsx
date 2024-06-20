import Link from "next/link";
import React from "react";
import { firaCode, inter } from "./ui/fonts";

const Nav = () => {
  const pageLinks = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/projects", text: "Projects" },
    { link: "/blog", text: "Blog" },
  ];
  return (
    <nav className={`${firaCode.className} fixed top-0  z-10 w-full flex justify-center`}>
      <ul className="relative flex xl:gap-2 top-0 z-20 bg-slate-950 md:gap-2 px-2  md:mt-2">
        {pageLinks.map((item, index) => {
          return (
            <li
              key={index}
              className="rounded-lg font-extrabold text-slate-300 hover:underline decoration-slate-400  underline-offset-8 decoration-2 xl:px-4 xl:py-2 px-2 py-2"
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
