import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface ChampionshipInstance extends Model {
    id: number;
    name: string;
    edition: number;
}

const Championship = sequelize.define<ChampionshipInstance>('Championship', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edition: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: 'championship',
    timestamps: false
});

//Championship.sync({force: false});
module.exports = Championship;