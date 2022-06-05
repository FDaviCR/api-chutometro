import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface MatchInstance extends Model {
    id: number;
    team_a: number;
    team_b: number;
    goals_a: number;
    goals_b: number;
    rodada: number;
    processado: boolean;
}

const Match = sequelize.define<MatchInstance>('Match', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    time_a: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time_b: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gols_a: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gols_b: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    rodada:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_campeonato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    processado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    tableName: 'partidas',
    timestamps: false  
});

//Match.sync({force: false});
module.exports = Match;