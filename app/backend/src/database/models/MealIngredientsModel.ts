import { DataTypes, Model } from "sequelize";
import MealsModel from "./MealsModel";
import db from ".";

export default class MealIngredientsModel extends Model {
  declare idIngredient: number;
  declare strIngredient: number[];
}

MealIngredientsModel.init({
  idIngredient: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strIngredient: {
    type: DataTypes.ARRAY,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'mealIngredients',
  timestamps: false,
});

MealIngredientsModel.belongsToMany(MealsModel, {
  through: 'RecipesModel',
  foreignKey: 'idIngredients',
  as: 'meal'
})

MealsModel.belongsToMany(MealIngredientsModel, {
  through: 'RecipesModel',
  foreignKey: 'idMeal',
  as: 'ingredients',
});
