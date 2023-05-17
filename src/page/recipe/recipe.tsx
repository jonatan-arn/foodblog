import { useParams } from "react-router-dom";

import defaultrecipe from "../../assets/defaulrecipe.png";
import recipes from "../../assets/recipes.json";
import IRecipe from "../../interface/Irecipe";
import Ingredientes from "../../interface/Iingredientes";
import Ingredientlist from "./ingredientlist";
import Stepstlist from "./stepstlist";
import Steps from "../../interface/Isteps";
import { useTranslation } from "react-i18next";

interface ingredientbyGroup {
  group: string;
  ingredientes: Ingredientes[];
}

interface stepsbyGroup {
  group: string;
  steps: Steps[];
}
function Recipe() {
  const [t, i18n] = useTranslation("global");

  const { id } = useParams();

  const recipe = recipes.find((r) => r.id == id) as unknown as IRecipe;

  const ingredient = recipe.ingredients;
  const ingredientsgroups = [] as ingredientbyGroup[];
  ingredient.map((i) => {
    const group = i.group;
    const samegroup = ingredient.filter((f) => f.group == group);
    if (!ingredientsgroups.find((g) => g.group == group) && group != undefined)
      ingredientsgroups.push({ group, ingredientes: samegroup });
  });

  const steps = recipe.steps;
  const stepsgroup = [] as stepsbyGroup[];
  steps.map((i) => {
    const group = i.group;
    const samegroup = steps.filter((f) => f.group == group);
    if (!stepsgroup.find((g) => g.group == group) && group != undefined)
      stepsgroup.push({ group, steps: samegroup });
  });
  console.log(recipe);

  return (
    <>
      <div className=" relative  flex  flex-col items-center justify-center">
        <img
          className="a w-full object-cover h-[75vh]"
          src={
            recipe.img != null
              ? "/src/assets/recipeimage/" + recipe.img
              : defaultrecipe
          }
          alt={recipe.img != null ? recipe.img : defaultrecipe}
        />
        <div
          className=" absolute top-1/2 left-1/2 text-center lg:text-7xl text-3xl text-white font-bold"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {t("recipes." + recipe.name + ".name")}

          <div className="text-base font-normal">{recipe.carddate}</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl pt-10 lg:pt-28">
        <h1 className="line-h pb-10  text-center text-2xl font-light leading-10">
          {t("recipes." + recipe.name + ".summary")}
        </h1>

        <div
          className="lg:grid gap-7 px-4 pt-3 "
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div>
            <h3 className="bold tracking-widest md:text-2xl text-4xl md:ml-0 ml-10">
              {t("recipe_page.in")}
            </h3>
            {ingredientsgroups.map((l, index) => (
              <Ingredientlist
                key={index}
                list={l}
                recipename={recipe.name}
              ></Ingredientlist>
            ))}
          </div>
          <div className="md:mt-0 mt-20">
            <h3 className="bold tracking-widest md:text-2xl text-4xl md:ml-0 ml-10">
              {t("recipe_page.st")}
            </h3>
            {stepsgroup.map((l, index) => (
              <Stepstlist
                key={index}
                list={l}
                recipename={recipe.name}
              ></Stepstlist>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Recipe;
