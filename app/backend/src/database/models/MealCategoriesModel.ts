import { Model, DataTypes } from "sequelize";
import db from ".";
import MealsModel from "./MealsModel";

export default class MealCategoriesModel extends Model {
  declare idCategory: number;
  declare strCategory: string;
}

MealCategoriesModel.init({
  idCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'mealCategories',
  timestamps: false,
});

MealCategoriesModel.hasMany(MealsModel, {
  foreignKey: 'idCategory',
  as: 'categories',
});
