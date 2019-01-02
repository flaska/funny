const redditDb = require('../lib/db/redditLib.db'),
    sharePostsDb = require('../lib/db/sharedPosts.db')
;

exports.copyPostToPreserved = (postId, cb)=>{
    console.log(postId);
    redditDb.Feed.findOne({'posts.id': postId}).lean().exec((err, feed)=>{
        if (!feed) return cb('Cannot find post by ID');
        let post;
        feed.posts.forEach((p)=>{
            if (p.id === postId) post = p;
        });

        sharePostsDb.SharedPost.findOneAndUpdate({
            'post.id': postId
        },{
            date: new Date(),
            post: post
        }, {
            upsert: true
        }).lean().exec(cb);

    });
};
