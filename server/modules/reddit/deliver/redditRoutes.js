const router = require('express').Router(),
    redditDb = require('../db/redditDb')
;

router.get('/feed', (req, res)=>{
    if (!req.query.subreddit || !req.query.channel || !req.query.from || !req.query.size) return res.status(404).send('Please specify all parameters');
    redditDb.getPosts(req.query, (err, result)=>{
       res.send(result);
    });
});
router.get('/comments', (req, res)=>{
    redditDb.getComments(req.query.postId, (err, result)=>{
        res.send(result);
    });
});

module.exports = router;