const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model {}

Likes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    songId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: 'Songs', 
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Likes'   
});

module.exports = Likes;