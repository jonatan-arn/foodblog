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
      <h5> {list.group} </h5>
      <ol>
        {list.ingredientes.map((i) => (
          <ul key={i.id}> {i.name} </ul>
        ))}
      </ol>
    </>
  );
}
