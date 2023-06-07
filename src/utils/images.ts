import chanamasala from "/recipeimage/chanamasala.png";
import carababurrata from "/recipeimage/carababurrata.png";
import currycacahuete from "/recipeimage/currycacahuete.png";
import tortelliniricota from "/recipeimage/tortelliniricota.png";

const images = new Map<string, string>();
images.set("chanamasala.png", chanamasala);
images.set("carababurrata.png", carababurrata);
images.set("currycacahuete.png", currycacahuete);
images.set("tortelliniricota.png", tortelliniricota);

export const getImage = (name: string) => {
  return images.get(name);
};
