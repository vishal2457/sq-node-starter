import type { Sequelize, Model } from 'sequelize'
import { DeviceLog } from './DeviceLog'
import { User } from './User'

export {
  DeviceLog,
  User
}

export function initModels(sequelize: Sequelize) {
  DeviceLog.initModel(sequelize)
  User.initModel(sequelize)

  DeviceLog.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })

  return {
    DeviceLog,
    User
  }
}
