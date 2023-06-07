import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="w-full bg-black text-white h-40 mt-40">
      <div className="flex justify-center items-center gap-4 h-full">
        <div className="p-1 border-2 text-4xl rounded-md border-white border-solid hover:bg-white hover:text-black">
          <a href="https://github.com/jonatan-arn/blog" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="p-1 border-2 text-4xl rounded-md border-white border-solid hover:bg-white hover:text-black">
          <a
            href="https://www.linkedin.com/in/jonatan-arnandis"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
