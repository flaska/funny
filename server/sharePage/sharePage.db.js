const redditDb = require('../lib/db/redditLib.db');

const mongoose = require('mongoose'),
    config = require('config');

let db;
if (config.database.reddit.opts) db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);
else db = mongoose.createConnection(config.database.reddit.uri);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Share Page connected to MongoDB');
});


let SharedPost = db.model('SharedPost', mongoose.Schema({
    date: Date,
    post: redditDb.postSchema
}, { collection: 'sharedPosts' }));



exports.copyPostToPreserved = (postId, cb)=>{
    console.log(postId);
    redditDb.Feed.findOne({'posts.id': postId}).lean().exec((err, feed)=>{
        if (!feed) return cb('Cannot find post by ID');
        let post;
        feed.posts.forEach((p)=>{
            if (p.id === postId) post = p;
        });
        let sharedPost = new SharedPost({
            date: new Date(),
            post: post
        });
        sharedPost.save(cb);
    });
};
