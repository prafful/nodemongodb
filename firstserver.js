var httpVariable = require("http")

var myserver = httpVariable.createServer(function(request, response){
    response.writeHead("200", {'Content-Type':'text/html'})
    response.write("<h1>Hello from Node Server</h1>")
    response.end()
})

myserver.listen(8888)