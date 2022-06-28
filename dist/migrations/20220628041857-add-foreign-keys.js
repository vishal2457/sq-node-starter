"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addConstraint('device_logs', {
            fields: ['user_id'],
            type: 'foreign key',
            name: 'device_logs_user_id_fkey',
            references: {
                table: 'users',
                field: 'id'
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('device_logs', 'device_logs_user_id_fkey');
    }
};
