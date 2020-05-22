const argv    = require('minimist')(process.argv.slice(2));
const express = require('express');
const app     = express();

argv.port = argv.port || process.env.PORT || 5000;

app.use(express.static('public'));

app.listen(argv.port);
