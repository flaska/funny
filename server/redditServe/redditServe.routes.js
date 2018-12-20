const router = require('express').Router(),
    redditServeDb = require('./redditServe.db')
;

router.get('/feed', (req, res)=>{
    if (!req.query.subreddit || !req.query.channel || !req.query.from || !req.query.size) return res.status(404).send('Please specify all parameters');
    redditServeDb.getPosts(req.query, (err, result)=>{
        res.send(result);
    });
});
router.get('/comments', (req, res)=>{
    redditServeDb.getComments(req.query.postId, (err, result)=>{
        res.send(result);
    });
});

module.exports = router;