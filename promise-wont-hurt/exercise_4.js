'use strict';

var promise = new Promise(function (resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));

    setTimeout(function () {

    }, 300);
}).then(
    console.log, onRejected
);

function onRejected(error) {
    console.log(error.message);
}