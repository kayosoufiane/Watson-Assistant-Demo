const { db } = require('../config');

class CloudantController {

    newIntent(intent, res) {
        db.insert(intent)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }
}

module.exports = CloudantController;