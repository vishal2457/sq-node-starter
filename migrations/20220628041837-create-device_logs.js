const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('device_logs', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      commandNumber: {
        type: DataTypes.STRING(10),
        field: 'command_number',
        allowNull: false
      },
      lat: {
        type: DataTypes.STRING(50),
        field: 'lat',
        allowNull: false
      },
      lng: {
        type: DataTypes.STRING(50),
        field: 'lng',
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      batteryStatus: {
        type: DataTypes.INTEGER,
        field: 'battery_status',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('device_logs');
  },
};