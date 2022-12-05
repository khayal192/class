class Fridge {
  #ingredients = [];

  get ingredients() {
    return this.#ingredients;
  }

  placeIngredients(ingredients) {
    this.ingredients.push(...ingredients);
  }

  takeIngredients(ingredient) {
    const findIngredient = this.#ingredients.find(
      (ing) => ing === this.ingredients
    );
    this.#ingredients = this.#ingredients.filter(
      (ing) => ing !== this.ingredients
    );
    return findIngredient;
  }
}

class Pizza {
  #size = 15;
  #ingredients = [];

  constructor(size, ingredients) {
    this.#size = size;
    this.#ingredients.push(...ingredients);
  }
}

const fridge = new Fridge();
fridge.placeIngredients(["cheese", "mushrooms", "tomato"]);

const cheese = fridge.takeIngredients("cheese");
const tomato = fridge.takeIngredients("tomato");

const pizza = new Pizza(30, [cheese, tomato]);

console.log(fridge.ingredients);
