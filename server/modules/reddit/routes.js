const router = require('express').Router(),
    redditApi = require('./api/redditApi'),
    cache = require('apicache').middleware('15 minutes')
;

router.use(cache);

router.get('/feed', redditApi.getFeed);
router.get('/comments', redditApi.getComments);

module.exports = router;