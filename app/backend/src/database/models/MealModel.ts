import { DataTypes, Model } from 'sequelize';
import db from '.';

export interface MealAttributes {
  idMeal: number;
  strName: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
}

export type MealCreationAttributes = Omit<MealAttributes, 'id'>;

class MealModel extends Model <MealAttributes, MealCreationAttributes> {
  declare idMeal: number;
  declare strName: string;
  declare strCategory: string;
  declare strArea: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1: string;
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
}

MealModel.init({
  idMeal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  strName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strCategory: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strArea: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strInstructions: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  strMealThumb: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  strTags: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  strYoutube: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  strIngredient1: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strIngredient2: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strIngredient3: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strIngredient4: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strIngredient5: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strIngredient6: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure1: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure2: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure3: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure4: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure5: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strMeasure6: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  modelName: 'meals',
  timestamps: false,
});

export default MealModel;
