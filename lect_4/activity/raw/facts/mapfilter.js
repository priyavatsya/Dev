let arr = [3,6,14,16,22];
// let arr2 = arr.map(function evenodd(num){
//     if(num%2==0)
//     return num+1;
//     else 
//     return num-1; 
// });

// console.log(arr2);
console.log(arr);

//filter uses only true or false a sreturn for judgement


function evenodd(num){
    if(num%2==0)
    return num+1;
    else 
    return num-1; 
}


function myMap(arr,cb)
{
    let arr2 =[];
    let j=0;
        for(let i =0;i<arr.length;i++)
        {
                arr2[j] = cb(arr[i]);
                j++;
            
        }
        return arr2;
}


let arr2 = myMap(arr,evenodd);
console.log(arr2);
