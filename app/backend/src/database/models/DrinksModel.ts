import { DataTypes, Model } from "sequelize";
import db from ".";
import DrinkCategoriesModel from "./DrinkCategoriesModel";

export type DrinksAttributes = {
  idDrink: number;
  strDrink: string;
  category: string;
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

export type DrinksCreationAttributes = Omit<DrinksAttributes, 'id'>;

export default class DrinksModel extends Model<DrinksAttributes, DrinksCreationAttributes> {
  declare idDrink: number;
  declare strDrink: string;
  declare category: string;
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

DrinksModel.init({
  idDrink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strDrink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strIngredient1: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient1',
    },
  },
  strIngredient2: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient2',
    },
  },
  strIngredient3: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient3',
    },
  },
  strIngredient4: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient4',
    },
  },
  strIngredient5: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient5',
    },
  },
  strIngredient6: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkIngredients',
      key: 'strIngredient6',
    },
  },
  strMeasure1: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure1',
    },
  },
  strMeasure2: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure2',
    },
  },
  strMeasure3: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure3',
    },
  },
  strMeasure4: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure4',
    },
  },
  strMeasure5: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure5',
    },
  },
  strMeasure6: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'drinkMeasures',
      key: 'strMeasure6',
    },
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'drinks',
  timestamps: false,
});

DrinksModel.belongsTo(DrinkCategoriesModel, {
  foreignKey: 'idCategory',
  as: 'categories',
})
