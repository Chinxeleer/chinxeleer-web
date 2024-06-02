import Link from "next/link";
import React from "react";

const Nav = () => {
  const pageLinks = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/resume", text: "Resume" },
    { link: "/projects", text: "Projects" },
    { link: "/posts", text: "Posts" },
  ];
  return (
    <nav className="flex justify-center">
      <ul className="flex xl:gap-2 md:gap-2 p-2 rounded-full xl:mt-6 md:mt-2 shadow-xl">
        {pageLinks.map((item, index) => {
          return (
            <li
              key={index}
              className="rounded-lg font-extrabold hover:underline  underline-offset-8 decoration-2 xl:px-4 xl:py-2 px-2 "
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
