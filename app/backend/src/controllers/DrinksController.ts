import { Request, Response } from 'express';
import DrinksService from '../services/DrinksService';

export default class DrinksController {
  static async getAll(req: Request, res: Response) {
    const { q } = req.query;
    const drinks = await DrinksService.getAllDrinks();

    if (q) {
      const filteredDrinks = drinks.filter((drink) => drink.name.includes(q as string));
      return res.status(200).json({ filteredDrinks });
    }

    return res.status(200).json(drinks);
  }

  static async findByFirstLetter(req: Request, res: Response) {
    const { q } = req.query;
    const drinks = await DrinksService.getAllDrinks();
    const filteredDrinks = drinks.filter((drink) => drink.name.startsWith(q as string));

    return res.status(200).json({ filteredDrinks })
  }

  static async getRandom(req: Request, res: Response) {
    const randomId = Math.floor(Math.random() * 7);
    const randomDrink = await DrinksService.findOneRandom(randomId);

    return res.status(200).json({ randomDrink });
  }

  public static getAllDrinksCategories = async (req: Request, res: Response) => {
    const { q } = req.query;
    const categories = await DrinksService.getAllDrinksCategories();
    if (q) {
      const qCaps = q.toString().toUpperCase();
      const filteredCategoriesByName = categories.filter((category) => category.name.toUpperCase().includes(qCaps as string));
      return res.status(200).json(filteredCategoriesByName);
    }
    return res.status(200).json(categories);
  };

  public static getAllDrinksIngredients = async (req: Request, res: Response) => {
    const { q } = req.query;
    const ingredients = await DrinksService.getAllDrinksIngredients();
    if (q) {
      const qCaps = q.toString().toUpperCase();
      const filteredIngredientsByName = ingredients.filter((ingredient) => ingredient.name.toUpperCase().includes(qCaps as string));
      return res.status(200).json(filteredIngredientsByName);
    }
    return res.status(200).json(ingredients);
  };
  
}