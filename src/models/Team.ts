import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface TeamInstance extends Model {
    id: number;
    name: string;
}

const Team = sequelize.define<TeamInstance>('Team', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'team',
    timestamps: false
});

Team.sync({force: false});
module.exports = Team;