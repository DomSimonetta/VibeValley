const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model {}

Playlist.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mood: {
        type: DataTypes.ENUM,
        values: ['Happy', 'Focused', 'Exercise', 'Downtempo'],
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', 
            key: 'id',
        },
        allowNull: false
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'Playlist'
});

module.exports = Playlist;