import { Link } from "react-router-dom";

import defaultrecipe from "../../assets/defaulrecipe.png";
import IRecipe from "../../interface/Irecipe";

interface recipeProps {
  recipe: IRecipe;
}
export default function recipescard({ recipe }: recipeProps) {
  return (
    <>
      <div className="items-left px- flex flex-col">
        <Link to={`/recipe/${recipe.id}`}>
          <img
            className="w-96 "
            src={recipe.cardimage != null ? recipe.cardimage : defaultrecipe}
            alt="defaul recipe image"
          />
          <h2 className="pt-4 text-xl font-bold leading-6 tracking-wide">
            {recipe.cardtitle}
          </h2>
        </Link>
        <h4 className="text-xs font-normal text-gray-400">{recipe.carddate}</h4>
      </div>
    </>
  );
}
