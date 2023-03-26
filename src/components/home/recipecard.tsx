import React from "react";
import defaultrecipe from "../../assets/defaulrecipe.png";

export default function recipescard() {
  return (
    <>
      <div className="items-left px- flex flex-col  ">
        <img className="w-96 " src={defaultrecipe} alt="defaul recipe image" />
        <h2 className="pt-4 text-xl font-bold leading-6 tracking-wide">
          Rabbit inspired by The Last of Us
        </h2>
        <h4 className="text-xs font-normal text-gray-400">Mar 6, 2023</h4>
      </div>
    </>
  );
}
