const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Blogs extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  user_id: {
    type: DataTypes.INTEGER,
    reference: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "blog",
};

Blog.init(schema, options);

module.exports = Blog;
