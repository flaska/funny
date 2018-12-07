const request = require('request');

exports.getFeed = (req, res)=>{
    request('https://www.reddit.com/r/' + req.query.subreddit + '/' + req.query.channel + '.json', function (error, response, body) {
        let result = [];
        JSON.parse(body).data.children.filter(redditPost=>!redditPost.data.distinguished).forEach((redditPost)=>{
            let jsonPost = {
                title: redditPost.data.title,
                url: redditPost.data.url,
                thumbnail : redditPost.data.thumbnail,
                likes: redditPost.data.score,
                date: new Date(redditPost.data.created * 1000)
            };
            result.push(jsonPost);
        });
        res.send(result);
    });
};