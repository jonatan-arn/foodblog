import { Link } from "react-router-dom";

import defaultrecipe from "../../../public/defaulrecipe.png";
import IRecipe from "../../interface/Irecipe";
import { useTranslation } from "react-i18next";

interface recipeProps {
  recipe: IRecipe;
}
export default function recipescard({ recipe }: recipeProps) {
  const [t, i18n] = useTranslation("global");
  console.log(recipe);

  return (
    <>
      <div className="items-left px- flex flex-col">
        <Link to={`/recipe/${recipe.id}`}>
          <img
            className="w-96 "
            src={
              recipe.img != null ? "/recipeimage/" + recipe.img : defaultrecipe
            }
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
