const express = require('express'),
    app = express(),
    sharePageRoutes = require('./sharePage.routes'),
    PORT = 5003
;

app.use('/api/sharePage', sharePageRoutes);

app.listen(PORT, () => console.log(`Share Page listening on port ${PORT}!`));