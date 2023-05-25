import { DataTypes, Model } from "sequelize";
import db from ".";
import MealIngredientsModel from "./MealIngredientsModel";
import MealsModel from "./MealsModel";

export default class RecipesModel extends Model {
  declare idRecipe: number;
  declare idIngredients: number[];
  declare idMeal: number;

} 

RecipesModel.init({
  idRecipe: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idIngredients: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  idMeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'mealsModel',
      key: 'idMeal',
    }
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'recipes',
  timestamps: false,
});
