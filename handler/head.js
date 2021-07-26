// This ( The Head ) contains some of the handlers used in our building tool

var package = require('../package.json');
Promise = require('bluebird')
Promise.promisifyAll(require('fs'))
path = require('path')

module.exports.create = function() {

return(`
/* ==UserStyle==
@name         ${package.name}
@author       ${package.author} <${package.maintainers[0].email}> (${package.maintainers[0].web})
@description  ${package.description}
@homepageURL  https://github.com/${package.author}/${package.name}
@supportURL   https://github.com/${package.author}/${package.name}/issues
@namespace    github.com/${package.author}/${package.name}
@version      ${package.version}
@license      ${package.license}
@preprocessor stylus
${fs.readFileSync('./dist/options.sass')}  
==/UserStyle== */

@-moz-document domain("last.fm") {

    /* Copyright (c) ${new Date().getFullYear()} Trigstur */
    /* https://raw.githubusercontent.com/${package.author}/${package.name}/master/LICENSE */

`)

}