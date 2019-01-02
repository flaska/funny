const router = require('express').Router(),
    sharePageDb = require('./sharePage.db')
;

router.put('/persistPost', (req, res)=>{
    if (!req.query.postId) return res.status(404).send('Please specify post id');
    sharePageDb.copyPostToPreserved(req.query.postId, (err, result)=>{
        res.send(result);
    });
});



module.exports = router;