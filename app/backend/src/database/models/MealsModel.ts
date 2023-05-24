import { DataTypes, Model } from "sequelize";
import db from ".";
import MealCategoriesModel from "./MealCategoriesModel";

export type MealsAttributes = {
  idMeal: number;
  strMeal: string;
  category: string;
  area: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strTags: string;
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
  strIngredient1: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient1',
    },
  },
  strIngredient2: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient2',
    },
  },
  strIngredient3: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient3',
    },
  },
  strIngredient4: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient4',
    },
  },
  strIngredient5: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient5',
    },
  },
  strIngredient6: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealIngredients',
      key: 'strIngredient6',
    },
  },
  strMeasure1: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure1',
    },
  },
  strMeasure2: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure2',
    },
  },
  strMeasure3: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure3',
    },
  },
  strMeasure4: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure4',
    },
  },
  strMeasure5: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure5',
    },
  },
  strMeasure6: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'mealMeasures',
      key: 'strMeasure6',
    },
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'meals',
  timestamps: false,
});

MealsModel.belongsTo(MealCategoriesModel, {
  foreignKey: 'idCategory',
  as: 'categories',
})
