import recipes from "./../../assets/recipes.json";
import ingredients from "./../../assets/ingredients.json";
import IRecipe from "./../../interface/Irecipe";
import IIngredient from "./../../interface/Iingredientes";
import Recipeslist from "./../../components/shared/recipeslist";

import food1 from "./../../assets/food1.png";
import s1 from "./../../assets/Stickers/Black Orange.png";
import s2 from "./../../assets/Stickers/Lemon.png";
import s3 from "./../../assets/Stickers/Red Diamond.png";
import s4 from "./../../assets/Stickers/Tasty Tomato.png";
import s5 from "./../../assets/Stickers/Purple Grape.png";
export default function home() {
  const r = recipes.slice(0, 9) as IRecipe[];
  const i = ingredients as IIngredient[];

  return (
    <>
      <div>
        <div className=" my-80 flex flex-col items-center justify-center">
          <img
            className=" w-4/6 lg:w-3/12"
            src={food1}
            alt="defaul recipe image"
          />
          <div className=" text-center text-7xl font-bold">
            Cuina. Disfruta.
          </div>
        </div>
        <div className="stickers">
          <img
            className="absolute top-[30vh] left-[10vw] hidden w-44 rotate-[190deg] xl:block"
            src={s1}
            alt="defaul recipe image"
          />
          <img
            className="absolute top-[10vh] left-[40vw] hidden w-44 rotate-[305deg] xl:block "
            src={s2}
            alt="defaul recipe image"
          />
          <img
            className="absolute top-[15vh] left-[85vw] hidden w-44 rotate-[350deg] xl:block"
            src={s3}
            alt="defaul recipe image"
          />
          <img
            className="absolute top-[40vh] left-[70vw] hidden w-44 rotate-[15deg] xl:block"
            src={s4}
            alt="defaul recipe image"
          />
          <img
            className="absolute top-[75vh] left-[20vw] hidden w-44 rotate-[55deg] xl:block"
            src={s5}
            alt="defaul recipe image"
          />
        </div>
        <div className="mx-auto max-w-4xl  pt-10 lg:pt-28">
          <h1 className="line-h pb-10  text-center text-2xl font-light leading-10">
            Binging with Babish is a cooking show dedicated to discovering what
            the delectable (and occasionally horrible) foods from fiction
            actually taste like.
          </h1>
          <Recipeslist list={r}></Recipeslist>
        </div>
      </div>
    </>
  );
}
