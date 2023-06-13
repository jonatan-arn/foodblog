import { Link } from "react-router-dom";

import defaultrecipe from "../../../public/defaulrecipe.png";
import IRecipe from "../../interface/Irecipe";
import { useTranslation } from "react-i18next";
import { getImage } from "../../utils/images.js";
interface recipeProps {
  recipe: IRecipe;
}
export default function recipescard({ recipe }: recipeProps) {
  const [t, i18n] = useTranslation("global");
  const img = recipe.img != null ? getImage(recipe.img) : defaultrecipe;
  return (
    <>
      <div className="items-left px- flex flex-col  ">
        <Link to={`/recipe/${recipe.id}`} className="flex flex-col ">
          <img
            className="md:w-96 "
            src={img}
            alt={recipe.img != null ? recipe.img : defaultrecipe}
          />
          <h2 className="pt-4 text-xl font-bold leading-6 tracking-wide">
            {t("recipes." + recipe.name + ".cardtitle")}
          </h2>
        </Link>
        <h4 className="text-xs font-normal text-gray-400">{recipe.carddate}</h4>
      </div>
    </>
  );
}
