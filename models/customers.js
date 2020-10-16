'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers.init({
    c_name: DataTypes.STRING,
    c_lastname: DataTypes.STRING,
    c_email: DataTypes.STRING,
    c_tel: DataTypes.STRING,
    c_num: DataTypes.STRING,
    c_mu: DataTypes.STRING,
    c_tanon: DataTypes.STRING,
    c_soi: DataTypes.STRING,
    c_tumbon: DataTypes.STRING,
    c_amphor: DataTypes.STRING,
    c_jungwan: DataTypes.STRING,
    c_sex: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
    tableName: 'customers'
  });
  return customers;
};