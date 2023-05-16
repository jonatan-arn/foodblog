import Steps from "./Isteps";

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
  cardimage: string;
  cardtitle: string;
  carddate: string;
  steps: Steps[];
}
