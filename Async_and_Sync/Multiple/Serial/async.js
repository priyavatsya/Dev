let fs = require("fs");
console.log("Before  ");
//callback hellllll
//when we call next function in the callback function of first function

function f1cb(err,content){
    if(err)
    {
        console.log("Inside err");
        console.log(err);
    }
    else{
        console.log("Data of f1 arrived");
        console.log("Content" + content);
    }
    
fs.readFile("../../f2.txt",f2cb);

}


function f2cb(err,content){
    if(err)
    {
        console.log("Inside err");
        console.log(err);
    }
    else{
        console.log("Data of f2 arrived");
        console.log("Content" + content);
    }
    fs.readFile("../../f3.txt",f3cb);
}


function f3cb(err,content){
    if(err)
    {
        console.log("Inside err");
        console.log(err);
    }
    else{
        console.log("Data of f3 arrived");
        console.log("Content" + content);
    }
    

    
}

//async function call
fs.readFile("../../f1.txt",f1cb);
