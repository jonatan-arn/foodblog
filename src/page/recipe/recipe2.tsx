import { useParams } from "react-router-dom";

import defaultrecipe from "../../assets/defaulrecipe.png";
import recipes from "./../../assets/recipes.json";
import ingredients from "./../../assets/ingredients.json";
import IRecipe from "./../../interface/Irecipe";
import Ingredientes from "./../../interface/Iingredientes";
import Ingredientlist from "./ingredientlist";
interface ingredientbyGroup {
  group: string;
  ingredientes: Ingredientes[];
}
function Recipe() {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id == id) as IRecipe;

  const ingredient = ingredients.filter(
    (i) => i.recipeid == id
  ) as Ingredientes[];
  const ingredientsgroups = [] as ingredientbyGroup[];
  ingredient.map((i) => {
    const group = i.group;
    const samegroup = ingredient.filter((f) => f.group == group);
    if (!ingredientsgroups.find((g) => g.group == group) && group != undefined)
      ingredientsgroups.push({ group, ingredientes: samegroup });
  });

  return (
    <>
      <div className=" relative  flex  flex-col items-center justify-center">
        <img
          className="a w-full object-cover h-[75vh]"
          src={recipe.img || defaultrecipe}
          alt="defaul recipe image"
        />
        <div
          className=" absolute top-1/2 left-1/2 text-center lg:text-7xl text-3xl text-white font-bold"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {recipe.name}
          <div className="text-base font-normal">{recipe.carddate}</div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl  pt-10 lg:pt-28">
        <h1 className="line-h pb-10  text-center text-2xl font-light leading-10">
          {recipe.summary}
        </h1>

        <div className="grid grid-cols-1 gap-7 px-4 pt-3 lg:grid-cols-2">
          <div>
            <h3>INGREDIENTS</h3>
            {ingredientsgroups.map((l, index) => (
              <Ingredientlist key={index} list={l}></Ingredientlist>
            ))}
          </div>
          <div>
            <h3 className=" text-base ">Method</h3>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
            <h5> Rabbit Rack Method:</h5>
            <ul>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
              <li>Season the rabbit saddle all over in salt and pepper.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recipe;
