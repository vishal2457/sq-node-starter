"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static initModel(sequelize) {
        User.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
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
        return User;
    }
}
exports.User = User;
