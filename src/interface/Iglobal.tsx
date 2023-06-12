import Steps from "./Isteps";
import Ingredients from "./Iingredientes";
export default interface Recipe {
  nav: navbar;
  home: home;
  recipe_page: recipe_page;
  recipes: recipes;
}

interface navbar {
  home: string;
  recipes: string;
  about: string;
  blog: string;
  contact: string;
}
interface home {
  home: {
    home_desc: "Pequeño proyecto para compartir mis receptas";
  };
}
interface recipe_page {
  in: string;
  st: string;
  mesure: {
    none: string;
    tbsp: string;
    tsp: string;
    to_taste: string;
    handfull: string;
    pinch: string;
    thumbsize: string;
    g: string;
    ml: string;
    springs: string;
    glass: string;
  };
  ingredients: {
    onion: string;
    cloves_garlic: string;
    ginger: string;
    butter: string;
    tomato_paste: string;
    coocked_chickpeas: string;
    coocked_black_beans: string;
    coconout_milk: string;
    cilantro: string;
    lemon: string;
    salt: string;
    garam_masala: string;
    paprika: string;
    ground_coriander: string;
    cumin: string;
    chili_powder: string;
    sweet_potatoes: string;
    rosemary: string;
    salt_pepper: string;
    grapes: string;
    white_wine: string;
    balsamic_vinagre: string;
    burrata: string;
    wallnuts: string;
    green_pepper: string;
    eggplant: string;
    peanut_butter: string;
    honey: string;
    curry: string;
  };
}
interface recipes {
  chanamasala: {
    name: String;
    title: String;
    summary: String;
    cardtitle: String;
    steps: {
      chanamasala_curry_steap: {
        name: String;
        chanamasala_curry_steap_1: String;
        chanamasala_curry_steap_2: String;
        chanamasala_curry_steap_3: String;
        chanamasala_curry_steap_4: String;
        chanamasala_curry_steap_5: String;
        chanamasala_curry_steap_6: String;
        chanamasala_curry_steap_7: String;
      };
    };
    ingredients: {
      chanamasala_spices: String;
      chanamasala_curry: String;
    };
  };
  carababurrata: {
    name: String;
    title: String;
    summary: String;
    cardtitle: String;
    steps: {
      carababurrata_sweetpotatos_steap: {
        name: String;
        carababurrata_sweetpotatos_steap_1: String;
        carababurrata_sweetpotatos_steap_2: String;
        carababurrata_sweetpotatos_steap_3: String;
        carababurrata_sweetpotatos_steap_4: String;
        carababurrata_sweetpotatos_steap_5: String;
      };
      carababurrata_grapes_steap: {
        name: String;
        carababurrata_grapes_steap_1: String;
        carababurrata_grapes_steap_2: String;
        carababurrata_grapes_steap_3: String;
      };
      carababurrata_garnish_steap: {
        name: String;
        carababurrata_garnish_steap_1: String;
      };
    };
    ingredients: {
      carababurrata_sweetpotatos: String;
      carababurrata_grapes: String;
      carababurrata_garnish: String;
    };
  };
  currycacahuete: {
    name: String;
    title: String;
    summary: String;
    cardtitle: String;
    steps: {
      currycacahuete_curry_steap: {
        name: String;
        currycacahuete_curry_steap_1: String;
        currycacahuete_curry_steap_2: String;
        currycacahuete_curry_steap_3: String;
        currycacahuete_curry_steap_4: String;
        currycacahuete_curry_steap_5: String;
        currycacahuete_curry_steap_6: String;
        currycacahuete_curry_steap_7: String;
        currycacahuete_curry_steap_8: String;
        currycacahuete_curry_steap_9: String;
      };
    };
    ingredients: {
      currycacahuete_spices: String;
      currycacahuete_curry: String;
    };
  };
}
