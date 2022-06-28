"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceLog = void 0;
const sequelize_1 = require("sequelize");
class DeviceLog extends sequelize_1.Model {
    static initModel(sequelize) {
        DeviceLog.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            commandNumber: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            },
            lat: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            lng: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            batteryStatus: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            sequelize
        });
        return DeviceLog;
    }
}
exports.DeviceLog = DeviceLog;
