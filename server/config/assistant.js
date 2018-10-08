require('dotenv').config();

const Assistant = require('watson-developer-cloud/assistant/v1');
const assistant = new Assistant({
    username: process.env.ASSISTANT_USERNAME,
    password: process.env.ASSISTANT_PASSWORD,
    version: '2018-09-20'
});

module.exports = assistant;