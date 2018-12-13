var mongoose = require('mongoose'),
    config = require('config');
var db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Reddit DB connected to MongoDB');
});

const Post = mongoose.Schema({
    title: String,
    url: String,
    thumbnail: String,
    numComments: Number,
    score: Number,
    dateUtc: Date,
    permalink: String,
    id: String,
    type: String
}, {id: false});

const Comment = mongoose.Schema({
    author: String,
    upvotes: Number,
    downvotes: Number,
    score: Number,
    body: String,
}, {id: false});

Comment.add({ replies: [Comment] });

const Feed = db.model('Feed', mongoose.Schema({
    subreddit: String,
    channel: String,
    posts: [Post]
}, { collection: 'feeds' }));

const CommentTree = db.model('CommentTree', mongoose.Schema({
    postId: String,
    subreddit: String,
    replies: [Comment]
}, { collection: 'comments' }));

exports.savePosts = (subreddit, channel, posts, cb)=>{
    Feed.findOneAndUpdate({
        subreddit: subreddit,
        channel: channel,
    },{
        subreddit: subreddit,
        channel: channel,
        posts: posts
    }, {
        upsert: true
    }).lean().exec(cb);
};

exports.saveComments = (subreddit, postId, replies, cb)=>{
    CommentTree.findOneAndUpdate({
        subreddit: subreddit,
        postId: postId
    },{
        subreddit: subreddit,
        postId: postId,
        replies: replies.replies
    }, {
        upsert: true
    }, cb);
};

exports.deleteComments = (subreddit, cb)=>{
    CommentTree.remove({subreddit: subreddit}).exec(cb);
};

exports.getPosts = (query, cb)=>{
    Feed.findOne({subreddit: query.subreddit, channel: query.channel}).lean().exec((err, feed)=>{
        feed.posts = feed.posts.slice(parseInt(query.from), parseInt(query.from) + parseInt(query.size));
        cb(err, feed);
    });
};

exports.getComments = (postId, cb)=>{
    CommentTree.findOne({postId: postId}).lean().exec(cb);
};