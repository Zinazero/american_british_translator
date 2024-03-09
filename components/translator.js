const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  americanToBritishWord(string) {
    let stringArray = string.split(" ");
    stringArray = stringArray.map((word, index) => {
      let punctuation = "";
      if (index === stringArray.length - 1) {
        if (/[.,!?]$/.test(word)) {
          punctuation = word.slice(-1);
          word = word.slice(0, -1);
        }
      }
      let translatedTime;
      if (/\d+:\d+/.test(word)) {
        translatedTime = word.replace(":", ".");
      }
      let translatedWord =
        americanOnly[word.toLowerCase()] ||
        americanToBritishSpelling[word.toLowerCase()];
      let translatedTitle = americanToBritishTitles[word.toLowerCase()];
      if (translatedTime) {
        return (
          '<span class="highlight">' + translatedTime + '</span>' + punctuation
        );
      }
      if (translatedTitle) {
        return (
          '<span class="highlight">' + translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1) + '</span>' + punctuation
        );
      }
      if (translatedWord) {
        return (
          '<span class="highlight">' + translatedWord + '</span>' + punctuation
               );
      }
      return word + punctuation;
    });
    let returnString = stringArray.join(" ");
    returnString = returnString.charAt(0).toUpperCase() + returnString.slice(1);
    return returnString;
  }

  britishToAmericanWord(string) {
    let stringArray = string.split(" ");
    stringArray = stringArray.map((word, index) => {
      let punctuation = "";
      if (index === stringArray.length - 1) {
        if (/[.,!?]$/.test(word)) {
          punctuation = word.slice(-1);
          word = word.slice(0, -1);
        }
      }
      let translatedTime;
      if (/\d+.\d+/.test(word)) {
        translatedTime = word.replace(".", ":");
      }
      let translatedWord =
        britishOnly[word.toLowerCase()] ||
        Object.keys(americanToBritishSpelling).find(
          (key) => americanToBritishSpelling[key] === word.toLowerCase()
        );
      let translatedTitle = Object.keys(americanToBritishTitles).find(
        (key) => americanToBritishTitles[key] === word.toLowerCase()
      );
      if (translatedTime) {
        return (
          '<span class="highlight">' + translatedTime + '</span>' + punctuation
        );
      }
      if (translatedTitle) {
        return (
          '<span class="highlight">' + translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1) + '</span>' + punctuation
        );
      }
      if (translatedWord) {
        return (
          '<span class="highlight">' + translatedWord + '</span>' + punctuation
          );
      }
      return word + punctuation;
    });
    let returnString = stringArray.join(" ");
    returnString = returnString.charAt(0).toUpperCase() + returnString.slice(1);
    return returnString;
  }

  americanToBritish(string) {
    for (const key in americanOnly) {
      if (americanOnly.hasOwnProperty(key) && key.includes(" ")) {
        const replacementValue = ('<span class="highlight">' + americanOnly[key] + '</span>');
        const regex = new RegExp(key, "gi");
        string = string.replace(regex, replacementValue);
      }
    }
    let newString = this.americanToBritishWord(string);
    return newString;
  }

  britishToAmerican(string) {
    for (const key in britishOnly) {
      if (britishOnly.hasOwnProperty(key) && key.includes(" ")) {
        const replacementValue = ('<span class="highlight">' + britishOnly[key] + '</span>');
        const regex = new RegExp(key, "gi");
        string = string.replace(regex, replacementValue);
      }
    }
    let newString = this.britishToAmericanWord(string);
    return newString;
  }
}

module.exports = Translator;