module.exports = {
    assistant: require('./assistant'),
    db: require('./cloudant'),
    translator: require('./translator'),
    sourceLanguage: process.env.SOURCE_LANGUAGE,
}