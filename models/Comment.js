const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_description: {
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
  blog_id: {
    type: DataTypes.INTEGER,
    reference: {
      model: "blog",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

Comment.init(schema, options);

module.exports = Comment;
