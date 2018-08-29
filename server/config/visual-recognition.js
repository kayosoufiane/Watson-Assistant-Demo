require('dotenv').config();

const VisualRecognition = require('watson-developer-cloud/visual-recognition/v3');
const visualRecognition = new VisualRecognition({
    version: '2018-03-19',
    iam_apikey: process.env.VISUAL_RECOGNITION_API_KEY
});

module.exports = visualRecognition;