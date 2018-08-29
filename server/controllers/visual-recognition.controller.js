const { visualRecognition } = require('../config');
const fs = require('fs');

class VisualRecognitionController {

    classifyImage(path, res) {
        const params = {
            images_file: fs.createReadStream(path),
            classifier_ids: process.env.VISUAL_RECOGNITION_CLASSIFIER_ID,
            threshold: 0.6
        }

        visualRecognition.classify(params, (err, response) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                fs.unlink(path, (err) => {
                    if (err) throw err;
                });
                res.status(200).send(response);
            }
        })
    }
}

module.exports = VisualRecognitionController;