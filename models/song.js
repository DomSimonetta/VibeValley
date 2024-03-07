const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    soundcloud_track_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    playlist_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Playlist',
          key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Songs' 
});

module.exports = Song;