
let fs = require("fs");
let path = require("path");

function checkWhetherFile(src)
{
    return fs.lstatSync(src).isFile();
}


function getContent(src){
    return fs.readdirSync(src);

}

function view(src){
//check whether file or directory
if(checkWhetherFile(src)==true){
    console.log("file => "+ src + "*");
}
else{
    //directory
    //print
    console.log("directory =>  " +src);
    //get childrens

    let childNames = getContent(src);
    for(let i=0;i< childNames.length;i++)
    {
        let chlidPath = path.join(src,childNames[i]);
        view(chlidPath);
    }

}
}

view(process.argv[2]);