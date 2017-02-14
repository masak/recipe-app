var fs = require('fs');
var path = require('path');
var express = require("express");
var app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/recipe-data', express.static(path.join(__dirname, 'recipe-data')));
app.use('/third-party', express.static(path.join(__dirname, 'third-party')));

function serveFile(path, res) {
    fs.readFile(path, "utf8", function (err, contents) {
        if (err) {
            return err;
        }

        res.send(contents);
    });
}

app.get("/", function(req, res) {
    serveFile("index.html", res);
});

app.get("/recipe.html", function(req, res) {
    serveFile("recipe.html", res);
});

const PORT = 8080;

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
