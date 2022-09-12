const express = require("express");
const appJens = express();
//get endpoint
appJens.get("/", (request, response) => {
    // send jeson
    response.send({ MessageChannel: "Created my first route. Check." });
});


appJens.listen(8080);
