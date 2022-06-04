import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface UserInstance extends Model {
    id: number;
    usuario: string;
    senha: string;
    id_time: number;
}

const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    usuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_time:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

//User.sync({force: false});
module.exports = User;