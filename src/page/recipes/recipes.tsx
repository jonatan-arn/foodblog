import recipesjson from "../../../public/recipes.json";
import Recipe from "../../interface/Irecipe";
import Recipeslist from "../../components/shared/recipeslist";
import Searchbar from "../../components/shared/searchbar";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import food1 from "/food1.png";

export default function recipes() {
  const allrecipes = recipesjson as unknown as Recipe[];
  const [t, i18n] = useTranslation("global");
  const [currentList, setCurrentList] = useState<string[]>([]);
  const [r, setR] = useState(recipesjson as unknown as Recipe[]);
  let allList: { id: string; strs: string[] }[] = [];
  allrecipes.map((nr) => {
    let title = t("recipes." + nr.name + ".name").toLowerCase();

    let tempList: { id: string; strs: string[] } = { id: nr.id, strs: [] };
    tempList.strs.push(title);

    nr.ingredients.map((i) =>
      tempList.strs.push(t("recipe_page.ingredients." + i.name).toLowerCase())
    );
    allList.push(tempList);
  });
  useEffect(() => {
    let tempr = allrecipes;

    if (currentList.length > 0) {
      currentList.map((c) => {
        tempr = tempr.filter((r) => currentList.includes(r.id));
      });
    } else {
      tempr = [];
    }

    setR(tempr);
  }, [currentList]);

  return (
    <>
      <div>
        <div className=" my-4 flex flex-col items-center justify-center">
          <img
            className=" w-4/6 lg:w-3/12"
            src={food1}
            alt="defaul recipe image"
          />
          <div className=" text-center text-7xl font-bold">
            {t("recipes_page.title")}
          </div>
        </div>
        <div className="mx-auto max-w-4xl  pt-10 lg:pt-28">
          <h1 className="line-h pb-10  text-center text-2xl font-light leading-10">
            {t("recipes_page.desc")}
          </h1>

          <Searchbar
            onChange={(c: string[]) => setCurrentList(c)}
            allList={allList}
            placeholder={t("recipes_page.placeholdertext")}
          ></Searchbar>
          <Recipeslist list={r}></Recipeslist>
        </div>
      </div>
    </>
  );
}
