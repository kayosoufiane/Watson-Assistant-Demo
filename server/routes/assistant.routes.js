const router = require('express').Router();
const { AssistantController } = require('../controllers');

const assistantController = new AssistantController();

router.post('/message-translator', (req, res) => {
    assistantController.postTranslatedMessage(req.body, res);
});

router.post('/message', (req, res) => {
    assistantController.postMessage(req.body, res);
});

module.exports = router;