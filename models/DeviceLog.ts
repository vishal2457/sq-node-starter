import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { User } from './User'

type DeviceLogAssociations = 'user'

export class DeviceLog extends Model<
  InferAttributes<DeviceLog, {omit: DeviceLogAssociations}>,
  InferCreationAttributes<DeviceLog, {omit: DeviceLogAssociations}>
> {
  declare id: CreationOptional<number>
  declare commandNumber: string
  declare lat: string
  declare lng: string
  declare userId: number
  declare batteryStatus: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // DeviceLog belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, number>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  declare static associations: {
    user: Association<DeviceLog, User>
  }

  static initModel(sequelize: Sequelize): typeof DeviceLog {
    DeviceLog.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      commandNumber: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      lat: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      lng: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      batteryStatus: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return DeviceLog
  }
}
