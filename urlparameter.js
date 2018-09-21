var httpVariable = require('http')
var urlparam = require('url')

var myserver = httpVariable.createServer(parameterFun).listen(1234)

function parameterFun(req, res){
    res.writeHead('200', {'Content-Type':'text/html'})
    res.write("I am working with query parameters!!!!")

    var myQuery = urlparam.parse(req.url, true).query

    var queryText1 = myQuery.name
    var queryText2 = myQuery.location

    res.write("<br>")
    res.write("Param 1: " + queryText1)

    res.write("<br>")
    res.write("Param 2: " + queryText2)

    res.write("<br>")
    res.write(req.url)

    res.end()

}