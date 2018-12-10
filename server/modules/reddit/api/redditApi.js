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

function getReplies(redditComment, replies){
    let comment = {
        upvotes: redditComment.data.ups,
        downvotes: redditComment.data.ups,
        score: redditComment.data.score,
        body: redditComment.data.body,
        replies: []
    };
    replies.push(comment);
    if (redditComment.data.replies && redditComment.data.replies.data) redditComment.data.replies.data.children.forEach((c)=>{getReplies(c, comment.replies)});
}

exports.getComments = (req, res)=>{
    request('https://www.reddit.com/r/funny/comments/a4wiv0.json?sort=top', function (error, response, body) {
        if (!JSON.parse(body)[1] && !JSON.parse(body)[1].data) return res.send(404);

        let result = {replies: []};
        JSON.parse(body)[1].data.children.forEach((c)=>{getReplies(c, result.replies)});
        res.send(result);
    });
};