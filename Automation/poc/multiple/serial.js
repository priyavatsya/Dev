let fs = require("fs");
let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];

let f1read = fs.promises.readFile("../../f1.txt");

f1read.then(function (data) {
    console.log("f1 ka data" + data);

    return fs.promises.readFile("../../f2.txt");
}).then(function(data){
    console.log("f2 ka data " + data);
}).catch(function(err){
    console.log(err);
})

