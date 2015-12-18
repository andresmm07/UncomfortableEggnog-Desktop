var _ = require('underscore');
var fs = require('fs');
var PhraseTrie = require('./phraseTrie');

var loadPhrases = function (phrasesPath, commands) {
  var phrases = {};
  try {
    phrases = JSON.parse(fs.readFileSync(phrasesPath));
  } catch (e) {
    console.log('new file');
  }
  phrases = _.defaults(phrases, Object.keys(commands)
    .reduce(function (phrases, command) {
      if (Array.isArray(phrases[commands])) {
        return phrases;
      }
      phrases[command] = [command];
      return phrases;
    }, {}));

  var trie = new PhraseTrie();


  updatePhrases(phrasesPath, phrases);
  return phrases;
};

var updatePhrases = function (phrasesPath, phrases) {
  console.log('writing phrase');
  fs.writeFileSync(phrasesPath, JSON.stringify(phrases));
};

module.exports = {
  loadPhrases: loadPhrases
};
