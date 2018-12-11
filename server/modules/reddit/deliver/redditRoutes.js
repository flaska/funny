const router = require('express').Router(),
    cache = require('apicache').middleware('15 minutes'),
    redditDb = require('../db/redditDb')
;

router.use(cache);

router.get('/posts', (req, res)=>{
    redditDb.getPosts(req.query.subreddit, req.query.channel, (err, result)=>{
       res.send(result);
    });
});
router.get('/comments', (req, res)=>{
    redditDb.getComments(req.query.postId, (err, result)=>{
        res.send(result);
    });
});

module.exports = router;