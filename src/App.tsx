import { useState } from "react";
import recipes from "./assets/recipes.json";
import ingredients from "./assets/ingredients.json";

import IRecipe from "./interface/Irecipe";
import IIngredient from "./interface/Iingredientes";
import Recipe from "./components/recipe/recipe";
function App() {
  const [count, setCount] = useState(0);
  const r = recipes as IRecipe[];
  const i = ingredients as IIngredient[];
  console.log(r);
  console.log(i);

  return (
    <>
      <div className=" bg-slate-200">
        <Recipe></Recipe>
      </div>
    </>
  );
}

export default App;
