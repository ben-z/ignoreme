module.exports.beginLanguageSeparator = function(language) {
  return `### begin ignoreme ${language} ###`;
};

module.exports.endLanguageSeparator = function(language) {
  return `### end ignoreme ${language} ###`;
};
