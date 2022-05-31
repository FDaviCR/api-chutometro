import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface ChampionshipTableInstance extends Model {
    id: number;
    name: string;
    edition: number;
}

const ChampionshipTable = sequelize.define<ChampionshipTableInstance>('ChampionshipTable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_campeonato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pontos:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    vitorias:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    derrotas:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    empates:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    partidas:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    posicao:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    gols_pro:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    gols_contra:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    saldo:{
        type: DataTypes.NUMBER,
        allowNull: true
    }
}, {
    tableName: 'tabelas',
    timestamps: false
});

//ChampionshipTable.sync({force: false});
module.exports = ChampionshipTable;