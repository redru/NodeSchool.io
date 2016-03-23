var http = require('http');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    // res.resume();
    res.on('data', function (data) {
        console.log(data);
    })
});
