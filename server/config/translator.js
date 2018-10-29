require('dotenv').config();

const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    iam_apikey: process.env.LANGUAGE_TRANSLATOR_IAM_API_KEY,
    url: 'https://gateway.watsonplatform.net/language-translator/api'
});

module.exports = languageTranslator;