import chanamasala from "/recipeimage/chanamasala.png";
import carababurrata from "/recipeimage/carababurrata.png";

const images = new Map<string, string>();
images.set("chanamasala.png", chanamasala);
images.set("carababurrata.png", carababurrata);

export const getImage = (name: string) => {
  return images.get(name);
};
