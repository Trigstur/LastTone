var CleanCSS = require('clean-css');
var name = " LastTone ";
var start = Date.now();
fs = require('fs');

return new Promise(function () {
    var exec = require("child_process").spawn,
        child;

    console.log("[" + name + "] Combining resources ...");
    exec("cat src/* > dist/rel.user.css", {
        shell: "powershell.exe"
    }, (error, stdout, stderr) => {

    }).on('close', (code) => {

        console.log("[" + name + "] Combined successfully");

        var end = Date.now();
        console.log("[" + name + "] Setting up for use...")

        fs.readFile('./src/main.css', 'utf8', (err, data) => {
            if (err) {
                console.log(`[!] Error => ${err}`)
                return
            }

            console.log(`[${name}] Compacting distribution`);
            var output = new CleanCSS({
                    returnPromise: true
                }).minify(data).then(function (output) {

                    console.log(`[${name}] Compacted successfully`);
                    console.log(`[${name}] Finishing up...`);
                    head = require("./handler/head.js");
                    fs.writeFile('./dist/rel.user.css', `${head.create()} ${output.styles} \n \n}`, function (err) {
                        if (err) return console.log(err);
                    })
                    console.log(`[${name}] Distribution ready`);
                    console.log(`[${name}] Build Complete [${end - start} ms]`);
                })
                .catch(function (err) {
                    console.log(`[!] Error => ${err}`)
                })

        })
    })
});