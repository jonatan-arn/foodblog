import { useState } from "react";
import recipes from "./assets/recipes.json";
import ingredients from "./assets/ingredients.json";

import IRecipe from "./interface/Irecipe";
import IIngredient from "./interface/Iingredientes";
import Recipe from "./components/recipe/recipe2";
import Recipeslist from "./components/home/recipeslist";
import Recipecard from "./components/home/recipecard";
import Navbar from "./components/shared/navbar";
import MobileNavbar from "./components/shared/mobileNav";

import food1 from "./assets/food1.png";

function App() {
  const r = recipes.slice(0, 9) as IRecipe[];
  const i = ingredients as IIngredient[];

  const onOpenEvent = () => {
    setOpen(!open);
  };
  let [open, setOpen] = useState(false);

  return (
    <>
      <MobileNavbar open={open} />
      <div className={`  w-full  ${open ? "site-open" : "site-close"}`}>
        <Navbar open={open} onOpenEvent={onOpenEvent} />

        <div>
          <div className=" flex min-h-screen flex-col items-center justify-center">
            <img
              className="a w-4/6 lg:w-3/12"
              src={food1}
              alt="defaul recipe image"
            />
            <div className=" text-center text-7xl font-bold">
              Cuina. Disfruta.
            </div>
          </div>
          <div className="mx-auto max-w-4xl  pt-10 lg:pt-28">
            <h1 className="line-h pb-10  text-center text-2xl font-light leading-10">
              Binging with Babish is a cooking show dedicated to discovering
              what the delectable (and occasionally horrible) foods from fiction
              actually taste like.
            </h1>
            <Recipeslist list={r}></Recipeslist>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
