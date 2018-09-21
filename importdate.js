var http  = require('http')
var dl = require('./datelibrary')
var cd = dl.mydatelibrary()

var myserver = http.createServer(function(req, res){
   
    
    res.writeHead("200", {'Content-Type':'text/html'})
    res.write("<h1>Hello from Node Server</h1>")
    res.write("<br>")
    res.write("<h1>" + cd + "</h1>") 
    res.end()

}).listen(8881)

