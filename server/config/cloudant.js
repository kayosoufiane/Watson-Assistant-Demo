const Cloudant = require('@cloudant/cloudant');
require('dotenv').config();

const url = process.env.CLOUDANT_URL
const db_name = process.env.CLOUDANT_DB_NAME;

const auth = {
    url: url,
    plugins: 'promises'
}

const cloudant = new Cloudant(auth);
const db = cloudant.use(db_name)

module.exports = db;