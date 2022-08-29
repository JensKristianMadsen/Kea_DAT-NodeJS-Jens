const express = require("express");
const app = express();
//get endpoint
app.get("/", (request, response) => {
    // send jeson
    response.send({MessageChannel: "Created my first route. Check."});
});


app.listen(8080);
