class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.complexity = complexity;
      this.affordability = affordability;
      this.duration = duration;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGlutenFree = isGlutenFree;
      this.isLactoseFree = isLactoseFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
  }
}

export default Meal;
