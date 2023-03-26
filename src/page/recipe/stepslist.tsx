import React from "react";
import Steps from "../../interface/Isteps";

interface ingredientbyGroup {
  group: string;
  ingredientes: Steps[];
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
