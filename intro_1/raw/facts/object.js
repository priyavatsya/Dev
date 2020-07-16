// // key :value pair 
// // user,resource
// let obj = {
//     name: "Steve",
//     lastname: "Rogers",
//     address: {
//         state: "New York",
//         city: "Manhatten"
//     },
//     movies: ["Civil War ", "Avengers", "Winter Soldier"],
//     age: 35,
//     isAvenger: true,
//     sayHi: function () {
//         console.log("Cap say's Hi");
//     }
// }
// console.log(obj);
// console.log("``````````````````````````````````````````````````````");
// // let val = obj.addres
// // // GET
// // console.log(obj.address)
// // console.log(obj.movies[1])
// // console.log(obj.isAvenger)
// obj.sayHi();
// // UPDATE,SET
// obj.isAvenger = false;
// // console.log(obj.isAvenger);
// obj.friends = ["Tony", "Bruce", "Peter"];
// // delete
// delete obj.age;

// console.log(obj);


//key value pair
//user resource

let obj = {
    name:"Steve",
    lastName:"Rogers",
    address:{
        state:"Newyork",
        city:"Manhattan"
    },
    movies:["Civil war","Avengers","Winter soldier"],
    age:90,
    isAvenger: true,
    sayHi: function(){
        console.log("Steve says hiiiiii");
    }
}

// console.log(obj);
let val = obj.address.city;
obj.sayHi();
console.log(val);