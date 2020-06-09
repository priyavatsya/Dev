/*
The following is a partial list of available selectors:

$("*") — selects all elements
$("#first") — selects the element with id="first"
$(".intro") — selects all elements with class="intro"
$("div") — selects all <div> elements
$("h2, div, p") — selects all <h2>, <div>, <p> elements
$("li:first") — selects the first <li> element
$("li:last") — selects the last <li> element
$("li:even") — selects all even <li> elements
$("li:odd") — selects all odd <li> elements
$(":empty") — selects all elements that are empty
$(":focus") — selects the element that currently has focus 
*/


let cheerio = require("cheerio");
let request = require("request");

request({
    method : 'GET',
    url : 'http://127.0.0.1:8000/'
},(err,res,body) =>{

    if(err) return console.error(err);
    let $  = cheerio.load(body);
    let title = $('title');
    console.log(title.text());
});

