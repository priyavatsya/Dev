let fs = require("fs");
fs.readFile("f1.txt",cb);

function cb(err,content){
    if(err){
        console.log("Inside error:");
        console.log(err);
    } else{
        console.log("Console :" + content);
    }
}

console.log("After");