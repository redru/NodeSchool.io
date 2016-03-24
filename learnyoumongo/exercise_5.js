require('es6-promise');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) {
        console.log(err);
        return;
    }

    var doc = {
        firstName : process.argv[2],
        lastName : process.argv[3]
    };

    console.log(JSON.stringify(doc));

    try {
        db.collection('docs').insertOne(doc);
    } catch (err) {
        console.log(err);
    } finally {
        db.close();
    }

});
