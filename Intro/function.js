function sayHi(message){
    console.log("Hi" +  message);
    return 10;
}

// console.log(sayHi); //accessing address of function

// console.log(sayHi("prateek")); //accessing the function

//fuctions arre variables in js

let fnKaRef = function great(){
    console.log("because functions are variables");
    return 10;
}

console.log(fnKaRef);

console.log(fnKaRef());

//variables can be passed as variables
//fonctions can also be passed as variables

function great(){
    console.log("because functions are variables");
    return 10;
    

