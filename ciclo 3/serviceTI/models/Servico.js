'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Servico.hasMany(models.Pedido);
    }
  };
  Servico.init({
    Nome: DataTypes.STRING,
    Descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Servico',
  });
  return Servico;
};