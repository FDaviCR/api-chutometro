import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface GuessInstance extends Model {
    id: number;
    idJogo: number;
    idVencedor: number;
}

const Guess = sequelize.define<GuessInstance>('Guess', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    idJogo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idVencedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'guess',
    timestamps: false
});

Guess.sync({force: false});
module.exports = Guess;