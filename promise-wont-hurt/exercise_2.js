'use strict';

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('FULFILLED!');
    }, 300);
}).then(
    function (val) {
        console.log(val);
    }
);
