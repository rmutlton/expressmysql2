'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  students.init({
    s_name: DataTypes.STRING,
    s_lastname: DataTypes.STRING,
    s_tel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'students',
    tableName: "students",
    timestamps: false,
  });
  return students;
};