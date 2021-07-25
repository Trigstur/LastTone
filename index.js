var name = " LastTone ";
var start = Date.now();
fs = require('fs');
head = require("./handler/head.js");

console.log("[" + name + "] Combining resources ...");
    
async function concat(index, objective) {
    return fs.readdirAsync(index)
      .map(file => fs.readFileAsync(path.join(index, file), 'UTF-8'))
      .then(intel => fs.writeFileAsync(objective, intel['join']('\x0a')))
  }

concat('./src', './dist/pure.sass')  
let options = concat('./options', './dist/options.sass')

console.log("[" + name + "] Combined successfully");
console.log("[" + name + "] Setting up for use...");

build()

async function build() {

await options;

                console.log(`[${name}] Finishing up...`);

                fs.writeFile('./dist/rel.user.css', `${head.create()} ${fs.readFileSync('./dist/pure.sass')} \n \n}`, function(err) {
                    if (err) return console.log(err);})

                console.log(`[${name}] Distribution ready`);
                var end = Date.now();
                console.log(`[${name}] Build Complete [${end - start} ms]`);

}