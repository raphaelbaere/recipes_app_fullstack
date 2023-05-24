import { DataTypes, Model } from 'sequelize';
import db from '.';

export interface DrinkAttributes {
  idDrink: number;
  strName: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
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

export type DrinkCreationAttributes = Omit<DrinkAttributes, 'id'>;

class DrinkModel extends Model <DrinkAttributes, DrinkCreationAttributes> {
  declare idDrink: number;
  declare strName: string;
  declare strCategory: string;
  declare strAlcoholic: string;
  declare strInstructions: string;
  declare strDrinkThumb: string;
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

DrinkModel.init({
  idDrink: {
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
  strAlcoholic: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  strInstructions: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  strDrinkThumb: {
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
  modelName: 'drinks',
  timestamps: false,
});

export default DrinkModel;
