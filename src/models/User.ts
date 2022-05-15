import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface UserInstance extends Model {
    id: number;
    username: string;
    password: string;
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});