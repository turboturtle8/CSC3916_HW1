const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)




/**********************A million different attempts****************************/
//var http = reqire("http");
//var server = http.createServer();
//server.on("request", (request, response) => {
//    //stuff goes here
//    var body = [];
//    request.on("data", chunk => {
//        body.push(chunk);
//    });

//    request
//        .on("end", () => {
//            //let bodyString = body.concat().toString();
//            //console.log(bodyString);
//            //response.end(bodyString);
//            response.end('hello world 1222');
//        })
//        .on("error", () => {
//            response.statusCode = 400;
//            response.end();
//        });
//    response.on("error", err => {
//        console.error(err);
//    });
//});
//server.listen(process.env.PORT || 8008, () => {
//    console.log("Server listening at 8008");
//});
//    request
//        .on("end", () => {
//            body = body.concat.toString();  //end request is one per request
//            response.end(body);
//        })
//        .on("error", () => {
//            response.statusCode = 400;
//            response.end();
//        });
//    response.on("error", err => {
//        console.err(err);
//    });

//    request
//        .on("end", () => {
//            let bodyString = body.concat().toString();
//            console.log(bodyString);
//            response.end(bodyString);
//        })
//        .on("error", () => {
//            response.statusCode = 400;
//            response.end();
//        });
//    response.on("error", err => {
//        console.error(err);
//    });
//});
//    //response.write("Hello 2021 World!");
//    //response.end();
//    console.log(sever.address());
//});

//server.listen(process.env.PORT || 8008, () => {
//    console.log("Server listening at 8008");
//});
