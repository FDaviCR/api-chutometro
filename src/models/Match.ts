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
    teamA: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    teamB: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goalsTeamA: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    goalsTeamB: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
}, {
    tableName: 'matche',
    timestamps: false  
});

Match.sync({force: false});
module.exports = Match;