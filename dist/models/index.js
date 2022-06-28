"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.User = exports.DeviceLog = void 0;
const DeviceLog_1 = require("./DeviceLog");
Object.defineProperty(exports, "DeviceLog", { enumerable: true, get: function () { return DeviceLog_1.DeviceLog; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
function initModels(sequelize) {
    DeviceLog_1.DeviceLog.initModel(sequelize);
    User_1.User.initModel(sequelize);
    DeviceLog_1.DeviceLog.belongsTo(User_1.User, {
        as: 'user',
        foreignKey: 'user_id'
    });
    return {
        DeviceLog: DeviceLog_1.DeviceLog,
        User: User_1.User
    };
}
exports.initModels = initModels;
