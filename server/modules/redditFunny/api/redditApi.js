const request = require('request');

exports.getHot = (req, res)=>{
    request('https://www.reddit.com/r/funny/hot.json', function (error, response, body) {
        let result = [];
        JSON.parse(body).data.children.forEach((redditPost)=>{
            let jsonPost = {
                title: redditPost.data.title,
                url: redditPost.data.url,
                // preview: redditPost.data.preview.images[0].source.url
            };
            result.push(jsonPost);
        });
        res.send(result);
    });
};