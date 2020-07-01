let c  = require("../../credentials.json");

require("chromedriver");
let smd = require("selenium-webdriver");

let browser = new smd.Builder();

let tab = browser.forBrowser("chrome").build();
let tabWillbeOpenedPromise = tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
tabWillbeOpenedPromise.
then(function () {
    //implicit timeout
    let timeOut = tab.manage().setTimeouts({
        implicit:10000
    });
    return timeOut;
})
.then(function () {
    let inputBoxPromise = tab.findElement(smd.By.css("#input-1"));
    return inputBoxPromise;
})
.then(function (inputBox) {
    let inputBoxWillbeFilledPromise = inputBox.sendKeys(c.email);   
    return inputBoxWillbeFilledPromise;
})
.then(function () {
    let passwordBoxPromise = tab.findElement(smd.By.css("#input-2"));
    return passwordBoxPromise;
})
.then(function (inputBox) {
    let inputBoxWillbeFilledPromise = inputBox.sendKeys(c.password);   
    return inputBoxWillbeFilledPromise;
})
.then(function () {
    console.log("Data Entered");
})
.then(function() {
    let loginButtonSelected  =tab.findElement(smd.By.css("button[data-analytics = 'LoginPassword']"));
    return loginButtonSelected;
}).then(function (loginClick){
    let loginWillBeClicked = loginClick.click();
    return loginWillBeClicked;
})
.then(function () {
    console.log("Login done");
})
.then(function () {
    let ipbtn = tab.findElement(smd.By.css("h3[title = 'Interview Preparation Kit']"));
    return ipbtn;
})
.then(function (btn) {
    let ipclick = btn.click();
    return ipclick;
})
.then(function () {
    console.log("Entered in interview preparation");
})
.then(function () {
    let warmUpBtn = tab.findElement(smd.By.css("a[data-attr1 = 'warmup']"));
    return warmUpBtn;
})
.then(function (btn) {
    let btnClick = btn.click();
    return btnClick; 
})
.then(function () {
    console.log("Entered in warmup");
})
.then(function () {
     let challenge1 = tab.findElement(smd.By.css("a[data-attr1 = 'sock-merchant']"));
     return challenge1;
 })
.then(function (clickChallenge) {
    let challenge = clickChallenge.click();
    return challenge;
})
.then(function () {
    console.log("Entered challenge 1");
})
.then(function () {
    let editorial = tab.findElement("a[data-attr2 = 'editorial']")
})
.catch(function (err) {
    console.log(err);
})


// function questionSolver() {

//     return new Promise(function (resolve, reject) {
//         // logic to solve a question
//         let allCBTnWSP = tab.findElements(swd.By.css(".challenge-submit-btn"));
//         allCBTnWSP.then(function (cBtnArr) {
//             let cBtnWillBeClickedP = cBtnArr[0].click();
//             return cBtnWillBeClickedP;
//         }).then(function () {

//             resolve();
//         }).catch(function (err) {
//             reject();
//         })
//     })
// }


// function handleLockBtn(){
//     return new Promise(function (resolve,reject){
//         let lockBtnWillBeFP = tab.findElement(smd.By.css("."))
        
//     })
// }
// function copyCode(){

// }

// function pasteCode(code){
//     return new Promise(function (resolve,reject){
    
//     })

// }