/**
 * Created by rj on 1/8/2017.
 */
var express = require( 'express' );
var path = require('path');
var port = 8081;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function () {
    console.log("*********************************");
    console.log("* App now running on port ", port, '*');
    console.log("*                               *");
    console.log("* http://localhost:" + port + "/        *");
    console.log("*********************************");
});