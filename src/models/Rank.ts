import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface RankInstance extends Model {
    id: number;
    id_jogador: number;
    pontos: number;
    id_campeonato: number;
}

const Rank = sequelize.define<RankInstance>('Rank', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_jogador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pontos:{
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    },
    id_campeonato: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ranks',
    timestamps: false
});

//Rank.sync({force: false});
module.exports = Rank;