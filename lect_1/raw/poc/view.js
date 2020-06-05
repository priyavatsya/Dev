
let fs = require("fs");
let path = require("path");

function checkWhetherFile(src)
{
    return fs.lstatSync(src).isFile();
}


function getContent(src){
    return fs.readdirSync(src);

}

function viewasTree(src,indent){
//check whether file or directory
if(checkWhetherFile(src)==true){
    
    console.log(indent + path.basename(src) + "*");
}

else{
    //directory
    //print
    // let base = path.basename(src);
    console.log(indent + path.basename(src));
    //get childrens

    let childNames = getContent(src);
    console.log(childNames);
    for(let i=0;i< childNames.length;i++)
    {
        let chlidPath = path.join(src,childNames[i]);
        viewasTree(chlidPath,indent+"__");
    }

}
}

function viewasFlatFile(src,toPrint){
    //check whether file or directory
    if(checkWhetherFile(src)==true){
        
        console.log(toPrint+ "*");
    }
    
    else{
        //directory
        //print
        // let base = path.basename(src);
        console.log(toPrint);
        //get childrens
    
        let childNames = getContent(src);
        console.log(childNames);
        for(let i=0;i< childNames.length;i++)
        {
            let chlidPath = path.join(src,childNames[i]);
            let ctoPrint = path.join(toPrint,childNames[i]);
            viewasFlatFile(chlidPath,ctoPrint);
        }
    
    }
    }


let src =process.argv[2];
// console.log(path.basename(src));
//viewasTree(src,"");
viewasFlatFile(src,path.basename(src));