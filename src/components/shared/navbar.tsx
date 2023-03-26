import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
interface navbarProps {
  onOpenEvent: () => void;
  open: boolean;
}
export default function navbar({ onOpenEvent, open }: navbarProps) {
  let Links = [
    { name: "home", link: "/" },
    { name: "recipes", link: "/" },
    { name: "about", link: "/" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];

  return (
    <div className={` fixed top-0 left-0 z-10 w-full`}>
      <div
        className="items-center justify-between py-6  px-12 md:flex md:px-20"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div
          className="flex cursor-pointer items-center text-xl font-bold 
      tracking-wide text-white "
        >
          <span className="mr-1  pt-2 text-3xl text-white"></span>
          CUINA
        </div>

        <div
          onClick={onOpenEvent}
          className="absolute right-8  top-6 cursor-pointer text-3xl text-white md:hidden"
        >
          <AiOutlineMenu />
        </div>

        <ul
          className={
            " md:static md:ml-0 md:flex md:w-auto md:items-center md:pb-0 md:pl-0 "
          }
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="hidden  md:my-0 md:ml-8 md:block  md:h-full md:border-none"
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
    </div>
  );
}
