/**
 * Created by sefasaid on 04/03/2017.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/"));
app.listen(process.env.PORT || 5000);