const http = require("http");

const { assistant, translator, sourceLanguage } = require("../config");

class AssistantController {
  postMessage(body, res) {
    this.getResonse(body.message, body.context)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  postTranslatedMessage(body, res) {
    let sourceLan;

    this.identifyLanguage(body.message)
      .then(source => {
        sourceLan = source;
        return this.translateLanguage(body.message, source, sourceLanguage);
      })
      .then(msg =>
        this.getTranslatedResponse(msg, body.context, sourceLanguage, sourceLan)
      )
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  postMessageWorkspaces(body, res) {
    this.identifyLanguage(body.message)
      .then(source => 
        this.getResponseWorkspaces(body.message, body.context, source)
      )
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  identifyLanguage(msg) {
    const params = {
      text: msg
    };

    return new Promise((resolve, reject) => {
      translator.identify(params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.languages[0].language);
        }
      });
    });
  }

  translateLanguage(msg, source, target) {
    const params = {
      text: msg,
      source: source,
      target: target
    };

    return new Promise((resolve, reject) => {
      if (source === target) {
        resolve(msg);
      }
      translator.translate(params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.translations[0].translation);
        }
      });
    });
  }

  getResonse(msg, ctx) {
    const params = {
      workspace_id: process.env.ASSISTANT_WORKSPACE_ID,
      input: {
        text: String(msg)
      },
      context: ctx
    };

    return new Promise((resolve, reject) => {
      assistant.message(params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getTranslatedResponse(msg, ctx, src, trg) {
    const params = {
      workspace_id: process.env.ASSISTANT_WORKSPACE_ID,
      input: {
        text: String(msg)
      },
      context: ctx
    };

    return new Promise((resolve, reject) => {
      assistant.message(params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          this.translateLanguage(res.output.text[0], src, trg)
            .then(translated => {
              res.output.text[0] = translated;
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    });
  }

  getResponseWorkspaces(msg, ctx, source) {
    const params = {
      workspace_id:
        (source === "en"
          ? process.env.ASSISTANT_WORKSPACE_ID_EN
          : process.env.ASSISTANT_WORKSPACE_ID) || process.env.ASSISTANT_WORKSPACE_ID,
      input: {
        text: String(msg)
      },
      context: ctx
    };

    return new Promise((resolve, reject) => {
      assistant.message(params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          try {
            if (res.intents[0].intent === 'Interests') {
              this.getImage()
              .then(data => {
                resolve(data);
              })
              .catch(err => {
                reject(err);
              });
            } else {
              resolve(res);
            }
          } catch (error) {
            resolve(res);
          }
        }
      });
    });
  }

  getImage() {
    return new Promise((resolve, reject) => {
      http.get(process.env.TJBOT_IP + "/chatbot_image", res => {
        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });
      }).on('error', err => {
        reject(err);
      })
    });
  }
}

module.exports = AssistantController;
