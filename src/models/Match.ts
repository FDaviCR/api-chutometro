import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface MatchInstance extends Model {
    id: number;
    teamA: number;
    teamB: number;
    goalsTeamA: number;
    goalsTeamB: number;
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
        type: DataTypes.INTEGER
    },
    gols_b: {
        type: DataTypes.INTEGER
    },
    processado: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'partidas',
    timestamps: false  
});

//Match.sync({force: false});
module.exports = Match;