/**
 * Created by sefasaid on 04/03/2017.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/"));
var port =  process.env.PORT || 5000
app.listen(port);
console.log("App is running in "+ port);