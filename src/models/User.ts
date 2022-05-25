import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface UserInstance extends Model {
    id: number;
    username: string;
    password: string;
}

const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idTime:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'users',
    timestamps: false
});

User.sync({force: false});
module.exports = User;