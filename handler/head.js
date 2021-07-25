var package = require('../package.json');
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

@-moz-document domain("last.fm") {

    /* Copyright (c) 2017/2020 Trigstur */
    /* https://raw.githubusercontent.com/${package.author}/${package.name}/master/LICENSE */

`)

}