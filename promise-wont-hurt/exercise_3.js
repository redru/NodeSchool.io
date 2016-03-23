'use strict';

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
}).then(
    function (val) {
        console.log(val);
    },
    function (error) {
        console.log(error.message);
    }
);
