var http = reqire("http");
var server = http.createServer();
server.on("request", (request, response) => {
    //stuff goes here
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            body = body.concat.toString();  //end request is one per request
            response.end(body);
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.err(err);
    });
    //response.write("Hello 2021 World!");
    //response.end();
    console.log(sever.address());
});

server.listen(process.env.PORT || 8008, () => {
    console.log("Server listening at 8008");
});