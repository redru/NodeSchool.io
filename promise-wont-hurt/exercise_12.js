'use strict';

var qio = require('q-io/http');

qio.read('http://localhost:7000')
    .then(sendRequest, console.error)
    .then(JSON.parse, console.error)
    .then(console.log);

function sendRequest(sessionId) {
    return qio.read({
        url: 'http://localhost:7001/' + sessionId.toString()
    });
}
