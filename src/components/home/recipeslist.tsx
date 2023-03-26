import React from "react";
import Recipecard from "./recipecard";
import IRecipe from "./../../interface/Irecipe";
interface recipelistProps {
  list: IRecipe[];
}

export default function recipeslist({ list }: recipelistProps) {
  return (
    <div className="grid grid-cols-1 gap-7 px-4 pt-3 lg:grid-cols-3">
      {list.map((recipe) => (
        <Recipecard recipe={recipe}></Recipecard>
      ))}
    </div>
  );
}
