/* there are 4 types of functions*/

//function statement
function sayHi(){
    console.log("Hello");
}

//function are variables

let varFn = function (){
    console.log("Functions are variable");
}
//arrrow function
let arrowFn = () => {
    console.log("Functions are variable");
};

//iifee --- immediately invoked function

(function anotherFn() {
    console.log("I am called as soon as i am created");
}) ();