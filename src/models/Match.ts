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
    teama: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    teamb: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goalsteama: {
        type: DataTypes.INTEGER
    },
    goalsteamb: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'matchs',
    timestamps: false  
});

//Match.sync({force: false});
module.exports = Match;