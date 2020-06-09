let myVar =120;

function c()
{
    console.log("Inside c  "+ myVar);
}

function b(){
    let myVar = 10;
    console.log("Inside b  "+myVar);
    c();
}

function a(){
    console.log("Inside a " + myVar);
    b();
}

a();