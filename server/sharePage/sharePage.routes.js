const router = require('express').Router(),
    sharePageDb = require('./sharePage.db')
;

router.get('/:postId', (req, res)=>{
    if (!req.params.postId) return res.status(404).send('Please specify post id');
    sharePageDb.getPost(req.params.postId, (err, result)=>{
        if (!result) return res.redirect('https://www.reddit.com/'+req.params.postId);
        res.render('sharedPost', { post: result.post });
    });
});

module.exports = router;