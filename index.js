var express = require('express'), app = express(), path = require('path');
app.use('/', express.static(path.join(__dirname, 'pub')));
app.listen(3000);