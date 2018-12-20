const request = require('request'),
    redditLoadDb = require('../redditLoad.db')
;

function getReplies(redditComment, replies, level){
    if (redditComment.data.score<50) return false;
    let l = level + 1;
    let comment = {
        author: redditComment.data.author,
        upvotes: redditComment.data.ups,
        downvotes: redditComment.data.ups,
        score: redditComment.data.score,
        body: redditComment.data.body,
        replies: []
    };
    replies.push(comment);
    if (l>=3) return false;
    if (redditComment.data.replies && redditComment.data.replies.data) redditComment.data.replies.data.children.slice(0,2).forEach((c)=>{getReplies(c, comment.replies, l)});
}

exports.fetchComments = (subreddit, postId, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/comments/' +postId + '.json?sort=top', function (error, response, body) {
        if (!JSON.parse(body)[1] || !JSON.parse(body)[1].data) return;
        let result = {replies: []};
        JSON.parse(body)[1].data.children.slice(0,2).forEach((c)=>{getReplies(c, result.replies, 0)});
        redditLoadDb.saveComments(subreddit, postId, result, cb);
    });
};

exports.deleteComments = (subreddit, cb)=>{
    redditLoadDb.deleteComments(subreddit, cb);
};