'use strict';

function attachTitle(value) {
    return 'DR. ' + value;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);
