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
    idjogo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idvencedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idjogador: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'guess',
    timestamps: false
});

//Guess.sync({force: false});
module.exports = Guess;