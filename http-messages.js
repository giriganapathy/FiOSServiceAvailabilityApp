var settings = require("./settings");
exports.show500 = function (req, res, err) {
    if (settings.httpMessageFormat === "HTML") {
        res.writeHead(500, "Internal Error Occured", { "Content-Type": "text/html" });
        res.write("<html><head><title>500</title></head><body>500: Internal Error:" + err + "</body></html>");
    }
    else {
        res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ "data": "Error Occured:500:" + err }));
    }
    res.end();
};

exports.show405 = function (req, res, err) {
    if (settings.httpMessageFormat === "HTML") {
        res.writeHead(405, "Method not supported!", { "Content-Type": "text/html" });
        res.write("<html><head><title>405</title></head><body>405: Method not supported:" + err + "</body></html>");
    }
    else {
        res.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ "data": "Error Occured:405:" + err }));
    }
    res.end();
};

exports.show404 = function (req, res, err) {
    if (settings.httpMessageFormat === "HTML") {
        res.writeHead(404, "Resource not found!", { "Content-Type": "text/html" });
        res.write("<html><head><title>404</title></head><body>405: Resource not found:" + err + "</body></html>");
    }
    else {
        res.writeHead(404, "Resource not found", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ "data": "Error Occured:404:" + err }));
    }
    res.end();
};

exports.sendJSON = function (req, res, data) {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (data) {
        res.write(JSON.stringify(data))
    }
    res.end();
};

exports.send200 = function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
};