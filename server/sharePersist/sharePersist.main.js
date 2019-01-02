const express = require('express'),
    app = express(),
    sharePersistRoutes = require('./sharePersist.routes'),
    PORT = 5003
;

app.use('/api/sharePersist', sharePersistRoutes);

app.listen(PORT, () => console.log(`Share Page listening on port ${PORT}!`));