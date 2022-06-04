import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface ChampionshipInstance extends Model {
    id: number;
    campeonato: string;
    edicao: number;
}

const Championship = sequelize.define<ChampionshipInstance>('Championship', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    campeonato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edicao: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: 'campeonatos',
    timestamps: false
});

//Championship.sync({force: false});
module.exports = Championship;