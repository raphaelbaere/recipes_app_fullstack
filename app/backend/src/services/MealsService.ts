import prismaClient from '../database/prismaClient';
import ApiError from '../utils/ApiError';

export default class MealsService {
  static async getAllMeals() {
    const meals = await prismaClient.recipe.findMany({
      where: {
        type: 'Meal'
      },
      include: {
        ingredients: true,
    }
    });

    return meals;
  }

  static async findOneRandom(id: number) {
    const randomDrink = await prismaClient.recipe.findUnique({
      where: {
        id,
      },

    });

    if (!randomDrink) throw new ApiError(401, 'Invalid ID!');

    return randomDrink;
  }
}
