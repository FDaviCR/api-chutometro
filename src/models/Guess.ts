import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

export interface GuessInstance extends Model {
    id: number;
    id_partida: number;
    id_vencedor: number;
    id_jogador: number;
    processado: number;
}

const Guess = sequelize.define<GuessInstance>('Guess', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_partida: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_vencedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_jogador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_campeonato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    processado: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'palpites',
    timestamps: false
});

//Guess.sync({force: false});
module.exports = Guess;