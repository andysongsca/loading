var http = require("http");
var url = require("url"); 
 
http.createServer(function(request, response) { 
	var json = {
		a: 'aaa',
		b: 'bbb'
	}
 	var cb = url.parse(request.url);
 	cb = cb.query.toString().split('=')[1];
    response.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});

    response.write(cb + '(' + JSON.stringify(json) + ');'); 
 	
 	setTimeout(function(){response.end(); },2000);

 	console.log(cb)
}).listen(8888);