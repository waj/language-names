var iso6393 = require('iso-639-3')
var cldr = require('cldr')
var fs = require('fs')

var names = {}

iso6393.forEach((lang) => {
  var displayName =
    cldr.extractLanguageDisplayNames(lang.iso6393)[lang.iso6393] ||
    cldr.extractLanguageDisplayNames(lang.iso6391)[lang.iso6391] ||
    lang.name

  names[lang.iso6391 || lang.iso6393] = displayName
})

fs.writeFile('language-names.json', JSON.stringify(names))
