var CleanCSS = require('clean-css');
var name = " LastTone ";
var start = Date.now();
fs = require('fs');
head = require("./handler/head.js");

return new Promise(function() {
    var Sync = require("child_process").spawn,
        child;

    console.log("[" + name + "] Combining resources ...");

    head.concat('./src', './dist/pure.css')
    head.concat('./options', './dist/options.css')

    console.log("[" + name + "] Combined successfully");

    var end = Date.now();
    console.log("[" + name + "] Setting up for use...")

    fs.readFile('./dist/pure.css', 'UTF-8', (err, data) => {
        if (err) {
            console.log(`[!] Error => ${err}`)
            return
        }

        console.log(`[${name}] Compacting distribution`);
        var output = new CleanCSS({
                returnPromise: true,
            }).minify(fs.readFileSync('./dist/pure.css')).then(function(output) {


                console.log(`[${name}] Compacted successfully`);
                console.log(`[${name}] Finishing up...`);

                fs.writeFile('./dist/rel.user.css', `${head.create()} ${output.styles} \n \n}`, function(err) {
                    if (err) return console.log(err);
                })
                console.log(`[${name}] Distribution ready`);
                console.log(`[${name}] Build Complete [${end - start} ms]`);
            })
            .catch(function(err) {
                console.log(`[!] Error => ${err}`)
            })

    })
})