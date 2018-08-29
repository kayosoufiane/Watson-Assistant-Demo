const router = require('express').Router();
const { CloudantController } = require('../controllers');

const cloudantController = new CloudantController();

router.post('/newIntent', (req, res) => {
    cloudantController.newIntent(req.body, res);
})

module.exports = router;