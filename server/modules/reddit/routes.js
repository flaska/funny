const router = require('express').Router(),
    redditApi = require('./api/redditApi')
;

router.get('/feed', redditApi.getFeed);

module.exports = router;