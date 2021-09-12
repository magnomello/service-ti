'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Clientesid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'clientes',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
          },
      Servicoid: {
        allowNull: false,
      type: Sequelize.INTEGER,
      reference:{
        model: 'servicos',
        key: 'id',
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'

      },
      valor: {
        type: Sequelize.FLOAT(6,2)
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pedidos');
  }
};