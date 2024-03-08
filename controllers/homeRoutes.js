const router = require('express').Router();
const { Playlist, User, Likes, Song, Comment } = require('../models');
const withAuth = require('../utils/auth');

// When the user is at the homepage
router.get('/', async (req, res) => {
    try {
        // Get all playlists and JOIN with user data
        const playlistData = await Playlist.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['username'],
            }],
        });

        // Serialize data so the template can read it
        const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));

        // Render the data using the homepage template
        res.render('homepage', { 
            playlists, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single playlist
router.get('/playlist/:id', async (req, res) => {
    try {
        const playlistData = await Playlist.findByPk(req.params.id, {
            include: [{
                model: User,
                as: 'user',
                attributes: ['username'],
            },
            {
                model: Comment,
                    as: 'comments',
                    include: {
                        model: User,
                        as: 'user',
                        attributes: ['username']
                    }
            }
            // {
            //     model: Song,
            //     as: 'songs',
            //     attributes: ['title', 'artist', 'soundcloud_track_id'],
            //     include: [
            //         {
            //             model: Likes,
            //             as: 'likes'
            //         },
            //         {
            //             model: Comment,
            //             as: 'comments',
            //             include: {
            //                 model: User,
            //                 as: 'user',
            //                 attributes: ['username']
            //             }
            //         }
            //     ]
            // },
        ],
        });

        const playlist = playlistData.get({ plain: true });

        const commentsData = await Comment.findAll({
            where: {
                playlist_id: req.params.id,
            },
            include: {
                model: User,
                as: 'user',
                attributes: ['username'],
            },
        });

        const comments = commentsData.map((comment) => comment.get({ plain: true }));

        // const songsData = await Song.findAll({
        //     where: {
        //         post_id: req.params.id,
        //     }
        // });

        // const songs = songsData.map((song) => song.get({ plain: true }));

        res.render('post', {
            playlist,
            comments,
            // songs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to the users profile from the homepage
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Playlist }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;