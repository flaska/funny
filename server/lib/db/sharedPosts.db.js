const mongoose = require('mongoose'),
    config = require('config')
;

let db;
if (config.database.reddit.opts) db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);
else db = mongoose.createConnection(config.database.reddit.uri);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Share Page connected to MongoDB');
});

let sharedPostSchema = mongoose.Schema({
    date: Date,
    post:  mongoose.Schema({
        title: String,
        url: String,
        thumbnail: String,
        numComments: Number,
        score: Number,
        dateUtc: Date,
        permalink: String,
        id: String,
        type: String
    }, {id: false})
}, { collection: 'sharedPosts' });

sharedPostSchema.index({'post.id': 1});

exports.SharedPost = db.model('SharedPost', sharedPostSchema);