import React from "react";
import Ingredientes from "./../../interface/Iingredientes";

interface ingredientbyGroup {
  group: string;
  ingredientes: Ingredientes[];
}
interface ingredientlistProps {
  list: ingredientbyGroup;
}
export default function ingredientlist({ list }: ingredientlistProps) {
  return (
    <>
      <h5 className="underline text-xl mt-12">{list.group}</h5>
      <ul className="list-disc pl-16">
        {list.ingredientes.map((i) => (
          <li className="md:text-xl mt-4" key={i.id}>
            {i.quantity} {i.mesure} {i.name}
            {i.optional === "1" ? " *" : ""}
          </li>
        ))}
      </ul>
    </>
  );
}
