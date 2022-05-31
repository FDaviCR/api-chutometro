import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface RankInstance extends Model {
    id: number;
    idUser: number;
    points: number;
}

const Rank = sequelize.define<RankInstance>('Rank', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_jogador: {
        type: DataTypes.STRING,
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
    tableName: 'rank',
    timestamps: false
});

//Rank.sync({force: false});
module.exports = Rank;