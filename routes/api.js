'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const inputString = req.body.text;
      const translationToggle = req.body.locale;
      let translation;

      if (!translationToggle || inputString === undefined) {
        res.json({ error: 'Required field(s) missing' });
        return;
      }
      if (inputString === '') {
        res.json({ error: 'No text to translate' });
        return;
      }
          
      if (translationToggle === "american-to-british") {
        translation = translator.americanToBritish(inputString);
      } else if (translationToggle === "british-to-american") {
        translation = translator.britishToAmerican(inputString);
      } else {
        res.json({ error: 'Invalid value for locale field' });
        return;
      };
        
      if (inputString === translation || !translation) {
        res.json({ text: inputString, translation: "Everything looks good to me!" });
      } else {
        res.json({ text: inputString, translation: translation });
      };
    });
};
