require('es6-promise');

var http = require('http');

var promises = [
    new Promise(function(resolve, reject) {
        http.get(process.argv[2], function (res) {
            var bufferList = [];

            res.on('data', function (data) {
                bufferList.push(data);
            }).on('end', function () {
                var dataBuffer = Buffer.concat(bufferList);
                resolve(dataBuffer.toString());
            })
        });
    }),

    new Promise(function(resolve, reject) {
        http.get(process.argv[3], function (res) {
            var bufferList = [];

            res.on('data', function (data) {
                bufferList.push(data);
            }).on('end', function () {
                var dataBuffer = Buffer.concat(bufferList);
                resolve(dataBuffer.toString());
            })
        });
    }),

    new Promise(function(resolve, reject) {
        http.get(process.argv[4], function (res) {
            var bufferList = [];

            res.on('data', function (data) {
                bufferList.push(data);
            }).on('end', function () {
                var dataBuffer = Buffer.concat(bufferList);
                resolve(dataBuffer.toString());
            })
        });
    })
];

Promise.all(promises).then(
    function(list) {
        list.forEach(function(response) {
            console.log(response);
        })
    },
    function(reason) {
        console.log(reason);
    }
);
