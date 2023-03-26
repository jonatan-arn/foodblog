import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
interface mobilenavbarProps {
  open: boolean;
}
export default function mobileNavbar({ open }: mobilenavbarProps) {
  let Links = [
    { name: "home", link: "/" },
    { name: "recipes", link: "/" },
    { name: "about", link: "/" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];
  console.log(open);

  return (
    <div
      className={`mobileNav fixed top-0 left-0 w-full md:hidden ${
        open ? "navbar-open " : "navbar-close "
      }`}
    >
      <ul
        className={` opacity-1 fixed left-0 top-0 bottom-0 ml-[25%] w-3/4 ease-in 
        `}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className=" flex h-20 w-full items-center justify-center border-b-2 border-gray-700 "
          >
            <a
              href={link.link}
              className="  text-sm font-bold leading-3  text-white duration-500 hover:text-gray-400 "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
