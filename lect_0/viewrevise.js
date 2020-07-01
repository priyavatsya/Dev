let fs = require("fs");
let path = require("path");

module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];
    if(mode=="t"){
        viewAsTree(src,"");
    }
    else{ 
        viewAsFlatFile(src,path.basename(src));
    }    
}

function getContent(file){
    return fs.readFileSync(file);
}

function isFile(file){
    fs.lstatSync(file).isFile();    
}

function viewAsTree(src,)