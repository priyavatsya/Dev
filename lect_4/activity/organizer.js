let fs = require("fs");
let path = require("path");
let utility = require("./utility");

function checkWhether(src){
    return fs.lstatSync(src).isFile()
}

function getContent(src){
    return fs.readdirSync(src);
}

function getExtention(src){
    let ext = src.split(".").pop();
    return ext; 
}

function sendFile(dest,category,src){
    console.log(category);
    let categoryPath = path.join(dest, category);
    //does category exist

    if(fs.existsSync(categoryPath)== false){
        fs.mkdirSync(categoryPath);
    }

    let fName = path.basename(src);
    let cPath = path.join(categoryPath, fName);
    fs.copyFileSync(src, cPath);
}

function getCategory(ext){
    let types = utility.types;
    for(let category in types){
        for(let i=0;i<types[category].length;i++){
            if(ext == types[category][i]){
                console.log("Inside get category" + category);
                return category;
            }
        }
    }

    return "others";
}

function organizer(src,dest){
    //checkWhether file or directory

    if(checkWhether(src) == true){


        let ext = getExtention(src);

        let category  = getCategory(ext);

        if(category == null){
            category = "others";
        }

        console.log(category);
        sendFile(dest,category,src);
    }

    else{
        let childNames = getCOntent(src);

        for(let i=0;i<childNames.length;i++){
            if(childNames[i] == "organized_files")
            {
                continue;
            }
            let childPath = path.join(src,childNames[i]);

            organizer(childPath,dest);
        }
    }
}

let src = process.argv[2];
let dest = path.join(src,"organized_files");
if(fs.existsSync(dest) == false)
{
    fs.mkdirSync(dest);
}

organizer(src,dest);