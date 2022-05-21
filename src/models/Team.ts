import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface TeamInstance extends Model {
    id: number;
    name: string;
}

export const Team = sequelize.define<TeamInstance>('Team', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'team',
    timestamps: false
});