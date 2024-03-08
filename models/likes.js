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
    playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Playlist', 
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