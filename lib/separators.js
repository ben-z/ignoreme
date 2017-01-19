module.exports.beginLanguageSeparator = function (language) {
  return `### begin ignoreit ${language} ###`;
}

module.exports.endLanguageSeparator = function (language) {
  return `### end ignoreit ${language} ###`;
}
