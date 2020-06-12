let fs = require("fs");
console.log("Before");

let readFilePromise = fs.promises.readFile("f1.txt");

readFilePromise.then(function (data){
    console.log("inside then");
    consosle.log("Content "+ data);

})

readFilePromise.catch(function (err){
    console.log(err);
})

console.log("afetr");