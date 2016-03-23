var filter = require('./module_ex_6');

filter(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    data.forEach(function(file) {
        console.log(file);
    })
});
