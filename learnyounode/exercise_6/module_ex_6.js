var fs = require('fs');
var path = require('path');

module.exports = function (pathName, extFilter, callback) {
    if (extFilter.charAt(0) !== '.')
        extFilter = '.' + extFilter;

    fs.readdir(pathName, function(err, list) {
        if (err)
            return callback(err);

        var filteredList = list.filter(function (file) {
            return path.extname(file) === extFilter;
        });

        return callback(null, filteredList);
    });
};
