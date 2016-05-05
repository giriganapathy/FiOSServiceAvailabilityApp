var http = require("http");
var fiosService = require("./controller/fios-service");
var httpMessage = require("./http-messages");

var port = process.env.port || 1337;
http.createServer(function (req, res) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                res.end("Welcome to Restful Web Service!");
            }
            else {
                try {
                    var zipCodePattern = "[0-9]+";
                    var zipCodeUrlPattern = new RegExp("/zipcode/" + zipCodePattern);
                    if (zipCodeUrlPattern.test(req.url)) {
                        zipCodeUrlPattern = new RegExp(zipCodePattern);
                        var dataArr = zipCodeUrlPattern.exec(req.url);
                        if (null == dataArr || dataArr.length == 0) {
                            throw new Error("URL is invalid!");
                        }
                        var zipCode = dataArr[0];
                        var status = fiosService.checkService(req, res, zipCode);
                        var result = { "status": status };
                        httpMessage.sendJSON(req, res, result);
                    }
                }
                catch (ex) {
                    httpMessage.show500(req, res, ex);
                }
            }
            break;
        default:
            httpMessage.show405(req, res);
            break;
    }
}).listen(port, function () {
    console.log("%s listening to %s", port, port);
});