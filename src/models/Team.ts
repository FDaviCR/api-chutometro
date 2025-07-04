import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface TeamInstance extends Model {
    id: number;
    time: string;
    escudo: string;
}

const Team = sequelize.define<TeamInstance>('Team', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    escudo: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'times',
    timestamps: false
});

Team.sync({force: false});
module.exports = Team;