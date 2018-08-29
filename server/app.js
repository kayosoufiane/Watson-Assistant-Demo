const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

const { assistantRoutes, visualRecognitionRoutes, cloudantRoutes } = require('./routes');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname + '/dist/ng-assistant')));
app.use('/api/assistant', assistantRoutes);
app.use('/api/visual-recognition', visualRecognitionRoutes);
app.use('/api/cloudant', cloudantRoutes);

module.exports = app;