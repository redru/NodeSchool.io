'use strict';

function parsePromised(val) {
    return new Promise(function(resolve, reject) {
        try {
            resolve(JSON.parse(val));
        } catch (err) {
            reject(err);
        }
    });
}

parsePromised(process.argv[2])
    .then(console.log)
    .then(null, console.log);
