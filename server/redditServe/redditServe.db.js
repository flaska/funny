const redditDb = require('../lib/db/redditLib.db');

exports.getPosts = (query, cb)=>{
    redditDb.Feed.findOne({subreddit: query.subreddit, channel: query.channel}).lean().exec((err, feed)=>{
        feed.posts = feed.posts.slice(parseInt(query.from), parseInt(query.from) + parseInt(query.size));
        cb(err, feed);
    });
};

exports.getComments = (postId, cb)=>{
    redditDb.CommentTree.findOne({postId: postId}).lean().exec(cb);
};