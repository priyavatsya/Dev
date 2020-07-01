
let ppt = require("puppeteer");
let {email,password} = require("../credentials.json");
const { promise } = require("selenium-webdriver");
(async function () {
    //headless browser

    let browser = await ppt.launch({
        headless: false,
        slowMo : 100,
        defaultViewport : null,
        args : ["--start-maximized","--incognito"]
    });

    let pkArray = await browser.pages();
    let page = pkArray[0];
    
    await page.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await page.type("#input-1",email);
    await page.type("#input-2",password); 
    await page.click("button[data-analytics='LoginPassword']");
    //Navigation => wait
    // await page.click
    await Promise.all([
        page.waitForNavigation({waitUntil : "networkidle0"}),
        page.click("button[data-analytics")
    ]);
    await page.waitForSelector("a[data-analytics='NavBarProfileDropDown']",
     { visible: true});
     await page.click("a[data-analytics='NavBarProfileDropDown']");

     await page.waitForSelector("a[data-analytics='NavBarProfileDropDownAdministration']",
     {visible:true});
     await promise.all(page.click("a[data-analytics='NavBarProfileDropDownAdministration']"), page.waitForNavigation({ waitUntil:"networkidle0"}));

     await page.goto("https://www.hackerrank.com/administration/contests", {waitUntil:"networkidle0"});
     await handleSinglePage(page,browser);

})();

async function handleSinglePage(page, browser) {
    
}