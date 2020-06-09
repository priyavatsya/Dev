let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");

console.log("Sending Request");

let url = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results";

request(url,cb);

function cb(err,response,html){
    console.log("Response Received");
    if(err==null && response.statusCode == 200){
        fs.writeFileSync("Series.html",html);
        console.log("File Saved");
        parseSeriesPage(html);
    }
    else if(response.statusCode == 404)
    {
        console.log("Page not found");
    }
    else{
        consloe.log(err);
        console.log(response.statusCode);
    }

}

function parseSeriesPage(html){
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    console.log("--------------------");

    
}