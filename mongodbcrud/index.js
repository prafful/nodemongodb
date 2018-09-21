var mongodbclient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongodbclient.connect(url, function(err, database){
    if(err){
        throw err
    }
    var currentdb = database.db("crudschool")
    currentdb.createCollection("students", function(err, res){
        if(err){
            throw err
        }
        console.log("Collection students created in crudschool")
        // database.close()
    })

 /*    var studentObj = [
        { "name":"prafful", "gender":"male", "score":88, "location":"chennai"},
        { "name":"pradhi", "gender":"female", "score":99, "location":"chennai"},
        { "name":"adi", "gender":"female", "score":100, "location":"chennai"}
    ]

    currentdb.collection("students").insertMany(studentObj, function(err, res){
        if(err){
            throw err
        }
        console.log("studentObj document insert is success!!!!" + res.result + " " + res.insertedCount);
        
        database.close()
    }) */

    currentdb.collection("students").find(
                                        {"name":/^p/},
                                        {projection:{"_id":0, "name":1, "score":1}}
                                    ).toArray(function(err, res){
        if(err){
            throw err
        }
        console.log(res)
        database.close()
    })


})