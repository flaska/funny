const router = require('express').Router(),
    redditApi = require('./api/redditApi')
;

router.get('/getHot', redditApi.getHot);

module.exports = router;