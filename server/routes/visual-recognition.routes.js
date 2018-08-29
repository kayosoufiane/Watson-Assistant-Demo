const router = require('express').Router();
const { VisualRecognitionController } = require('../controllers');
const multer = require('multer');
const upload = multer({ dest: 'images/' });

const visualRecognitionController = new VisualRecognitionController();

router.post('/classify', upload.single('image'), (req, res) => {
    visualRecognitionController.classifyImage(req.file.path, res)
})

module.exports = router;