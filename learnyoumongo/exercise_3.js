require('es6-promise');
var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) {
        console.log(err);
        return;
    }

    new Promise(function(resolve, reject) {
        db.collection('parrots')
            .find(
                { age: { $gt: Number(process.argv[2]) } },
                { _id: 0, name: 1, age: 1 }
            ).toArray(function(err, docs) {
                !err ? resolve(docs) : reject(err);
            });
    }).then(
        function(data) {
            console.log(data);
            db.close();
            return data;
        }, function(cause) {
            console.log(cause);
            db.close();
            return cause;
        }
    );
});
