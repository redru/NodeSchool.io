var http = require('http');

var bufferList = [];

http.get(process.argv[2], function (res) {

    res.on('data', function (data) {
        bufferList.push(data);
    }).on('end', function () {
        var dataBuffer = Buffer.concat(bufferList);
        console.log(dataBuffer.length);
        console.log(dataBuffer.toString());
    })
});
/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
*/
