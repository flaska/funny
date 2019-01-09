const router = require('express').Router()
;

router.get('/test', (req, res)=>{
    res.send('ok');
});

module.exports = router;