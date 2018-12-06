const request = require('request');

exports.getHot = (req, res)=>{
    request('https://www.reddit.com/r/funny/hot.json', function (error, response, body) {
        let result = [];
        JSON.parse(body).data.children.filter(redditPost=>!redditPost.data.distinguished).forEach((redditPost)=>{
            let jsonPost = {
                title: redditPost.data.title,
                url: redditPost.data.url,
                thumbnail : redditPost.data.thumbnail
            };
            result.push(jsonPost);
        });
        res.send(result);
    });
};