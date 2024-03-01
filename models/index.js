const User = require('./user');
const Playlist = require('./playlist');
const Song = require('./song');
const Comment = require('./comment');
const Like = require('./like');

Playlist.hasMany(Song, {
    foreignKey: 'playlistId',
    as: 'songs'
});
Song.belongsTo(Playlist, {
    foreignKey: 'playlistId',
    as: 'playlist'
});