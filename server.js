let express = require("express");
let app = express();

app.use(express.static(__dirname + "/dist/reactive-form-model"));

app.get("/*", (req, resp) => {
    resp.sendFile(__dirname + "/dist/reactive-form-model/index.html");
});

app.listen(process.env.PORT || 8080);