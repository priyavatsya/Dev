let fs = require("fs");
console.log("Before");


fs.readFile("f1.txt",frcb);

function frcb(err,content){
    console.log("Content -)" +content);
    console.log("Actual after");
}

console.log("After");
console.log("I can do other things");
console.log("--------------------");