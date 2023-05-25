import { DataTypes, Model } from "sequelize";
import db from ".";
import MealIngredientsModel from "./MealIngredientsModel";


export type MealsAttributes = {
  idMeal: number;
  strMeal: string;
  category: string;
  area: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strTags: string;
  strIngredient: string[];
  strMeasure: string[];
}

export type MealsCreationAttributes = Omit<MealsAttributes, 'id'>;

export default class MealsModel extends Model<MealsAttributes, MealsCreationAttributes> {
  declare idMeal: number;
  declare strMeal: string;
  declare category: string;
  declare area: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strYoutube: string;
  declare strTags: string;
  declare strIngredient: string;
  declare strMeasure: string;
}

MealsModel.init({
  idMeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strMeal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strInstructions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strMealThumb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strYoutube: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strTags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strIngredient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strMeasure: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'meals',
  timestamps: false,
});

MealsModel.belongsToMany(MealIngredientsModel, {
  through: 'RecipesModel',
  foreignKey: 'idMeal',
  as: 'ingredients',
});

MealIngredientsModel.belongsToMany(MealsModel, {
  through: 'RecipesModel',
  foreignKey: 'idIngredients',
  as: 'meal',
});
