

let input = process.argv.slice(2);
let viewFile = require("./commands/view");
let helpFile = require("./commands/help");
// console.log(input);
// [node ,tpp.js ,view ,src ,-t]
// node tpp.js view src -f
let cmd = input[0];
console.log(cmd)
console.log(process.argv[1]);
console.log("------------")

console.log(process.argv[2]);

console.log(process.argv[3]);

console.log(process.argv[4]);
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3], process.argv[4])
        break;
    case "treefy":
        console.log("Treefy  command Implemented");
        break;
    case "untreefy":
        console.log("Untreefy  command Implemented");
        break;
    case "help":
        helpFile.help();
        break;
    default:
        console.log("Work Command");
        break;
}