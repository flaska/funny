const request = require('request'),
    redditDb = require('../db/redditDb')
;

exports.fetchPosts = (subreddit, channel, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/' + channel + '.json', function (error, response, body) {
        let result = [];
        JSON.parse(body).data.children
            .filter(redditPost=>!redditPost.data.distinguished)
            .filter(redditPost=>!redditPost.data.over_18)
            .forEach((redditPost)=>{
                let jsonPost = {
                    title: redditPost.data.title,
                    url: redditPost.data.url,
                    thumbnail : redditPost.data.thumbnail,
                    numComments: redditPost.data.num_comments,
                    score: redditPost.data.score,
                    dateUtc: new Date(redditPost.data.created_utc * 1000),
                    permalink: redditPost.data.permalink,
                    id: redditPost.data.id
                };
                result.push(jsonPost);
            });
        redditDb.savePosts(subreddit, channel, result, cb);
    });
};

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

exports.fetchComments = (postId, cb)=>{
    request('https://www.reddit.com/r/funny/comments/' +postId + '.json?sort=top', function (error, response, body) {
        if (!JSON.parse(body)[1] || !JSON.parse(body)[1].data) return;
        let result = {replies: []};
        JSON.parse(body)[1].data.children.slice(0,2).forEach((c)=>{getReplies(c, result.replies, 0)});
        redditDb.saveComments(postId, result, cb);
    });
};