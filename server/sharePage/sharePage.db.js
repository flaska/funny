const redditDb = require('../lib/db/redditLib.db'),
    sharePostsDb = require('../lib/db/sharedPosts.db')
;

exports.getPost = (postId, cb)=>{
    sharePostsDb.SharedPost.findOne({'post.id': postId}).lean().exec(cb);
};
