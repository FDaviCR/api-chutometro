import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface ChampionshipInstance extends Model {
    id: number;
    name: string;
    edition: number
}

export const Championship = sequelize.define<ChampionshipInstance>('Championship', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    edition: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'championship',
    timestamps: false
});