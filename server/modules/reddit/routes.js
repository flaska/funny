const router = require('express').Router(),
    redditApi = require('./api/redditApi'),
    cache = require('apicache').middleware('15 minutes')
;

router.get('/feed', cache, redditApi.getFeed);
// router.get('/comments', redditApi.comments);

module.exports = router;