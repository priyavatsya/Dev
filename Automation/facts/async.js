let fs = require("fs");
let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];


function serialCbSolver(idx,files){
    if(idx==files.length){
        return;
    }

    fs.readFile(files[i],function(err,content) {
        console.log("Data of f${idx+1} arrived")
    })


}