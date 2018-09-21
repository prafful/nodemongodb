var file = require("fs")

file.readFile('source.html', function(err, data){
    if(err){
        throw err
    }

    console.log(data.toString());
    console.log("Writing to a new file...")


    file.writeFile("target.html", data, function(err){
        if(err){
            throw err
        }
    })
})