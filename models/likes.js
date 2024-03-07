const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model {}

Likes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    song_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Songs', 
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Likes'
});

module.exports = Likes;