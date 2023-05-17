import Steps from "./Isteps";
import Ingredients from "./Iingredientes";
export default interface Recipe {
  id: string;
  name: string;
  img: string;
  kcal: string;
  time: string;
  categorie: string;
  type: string;
  summary: string;
  autho: string;
  quantity: string;
  restriccion: string;
  cardtitle: string;
  carddate: string;
  ingredients: Ingredients[];
  steps: Steps[];
}
