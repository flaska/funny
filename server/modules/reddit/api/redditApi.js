const request = require('request');

exports.getFeed = (req, res)=>{
    request('https://www.reddit.com/r/' + req.query.subreddit + '/' + req.query.channel + '.json', function (error, response, body) {
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
        res.send(result);
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

exports.getComments = (req, res)=>{
    request('https://www.reddit.com/r/funny/comments/' + req.query.postId + '.json?sort=top', function (error, response, body) {
        if (!JSON.parse(body)[1] || !JSON.parse(body)[1].data) return res.status(404).send();
        let result = {replies: []};
        JSON.parse(body)[1].data.children.slice(0,2).forEach((c)=>{getReplies(c, result.replies, 0)});
        res.send(result);
    });
};