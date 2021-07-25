// This ( The Head ) contains some of the handlers used in our building tool

var package = require('../package.json');
Promise = require('bluebird')
Promise.promisifyAll(require('fs'))
path = require('path')

module.exports.concat = function(index, objective) {
  return fs.readdirAsync(index)
    .map(file => fs.readFileAsync(path.join(index, file), 'UTF-8'))
    .then(intel => fs.writeFileAsync(objective, intel['join']('\x0a')))
}

module.exports.create = function() {

return(`
/* ==UserStyle==
@name         ${package.name}
@author       ${package.author} <${package.maintainers[0].email}> (${package.maintainers[0].web})
@description  ${package.description}
@updateURL    https://github.com/${package.author}/${package.name}/rel.user.css
@homepageURL  https://github.com/${package.author}/${package.name}
@supportURL   https://github.com/${package.author}/${package.name}/issues
@namespace    github.com/${package.author}/${package.name}
@version      ${package.version}
@license      ${package.license}
@preprocessor default
==/UserStyle== */

@-moz-document domain("*") {

    /* Copyright (c) 2017/2020 Trigstur */
    /* https://raw.githubusercontent.com/${package.author}/${package.name}/master/LICENSE */

`)

}