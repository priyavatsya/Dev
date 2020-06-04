console.log("Hello All:)");
// primitive types=> number,string,boolean,undefined,null
let varName;
varName =10;
varName = "I am a string";

console.log(varName);
let number = 23
for(let i = number;i*i<=number;i++)
{
    if(number%i==0)
    {
        console.log("Number is not prime");
        return;
    }
}