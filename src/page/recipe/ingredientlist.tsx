import Ingredientes from "./../../interface/Iingredientes";
import { useTranslation } from "react-i18next";

interface ingredientbyGroup {
  group: string;
  ingredientes: Ingredientes[];
}
interface ingredientlistProps {
  list: ingredientbyGroup;
  recipename: string;
}
export default function ingredientlist({
  list,
  recipename,
}: ingredientlistProps) {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h5 className="underline text-xl mt-12">
        {t("recipes." + recipename + ".ingredients." + list.group)}
      </h5>
      <ul className="list-disc pl-16">
        {list.ingredientes.map((i) => (
          <li className="md:text-xl mt-4" key={i.id}>
            {i.quantity} {t("recipe_page.mesure." + i.mesure)}{" "}
            {t("recipe_page.ingredients." + i.name)}
            {i.optional === "1" ? " *" : ""}
          </li>
        ))}
      </ul>
    </>
  );
}
