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
    idTeam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idChampionship: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    points:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    victory:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    defeat:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    draw:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    matchs:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    position:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    GP:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    GC:{
        type: DataTypes.NUMBER,
        allowNull: true
    },
    SG:{
        type: DataTypes.NUMBER,
        allowNull: true
    }
}, {
    tableName: 'championshiptable',
    timestamps: false
});

//ChampionshipTable.sync({force: false});
module.exports = ChampionshipTable;