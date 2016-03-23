'use strict';

var qio = require('q-io/http');

qio.read('http://localhost:7000')
    .then(JSON.parse, console.error)
    .then(console.log, console.error);
