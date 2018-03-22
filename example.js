/* example.js */

//begining
var assert = require('assert');
var regex = /^[0-9]{10}$/;

assert(regex.test('8286280206'), '10 digit phone number does not match');
//assert(regex.test('828.828.7221'), 'Phone number does not match');

// stock market tickers
regex = /^[A-Z]{1,5}$/;

assert(regex.test('AMD'), "three letter symbol");
assert(regex.test('GOOGL'), "5 letter symbol");
assert(regex.test('F'), "1 letter symbol");


// credit card numbers
regex = /(^[0-9]{16}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})/;
assert(regex.test('4000000000000000'), '16 digit number no dashes');

assert(regex.test('4000-0000-0000-0000'), '16 digit number with dashes');


//href links not quite done
regex = /^http[s]?:\/\/([a-zA-Z].)*(google|Google).com([\/][a-zA-Z0-9\-]+)*$/;
//regex = /^http[s]?:\/\/([a-zA-Z].)?[a-zA-Z0-9]+[a-zA-Z0-9\-]*(\/[a-zA-Z0-9\-])*.[a-zA-Z]{2,10}$/


// star trek episode scraping from wiki page
regex = /(\<th scope=\"row\" id=\"ep[0-9]+\" style=\"text-align:center\"\>([    0-9]+))[^]+?(\<td class=\"summary\" style=\"text-align:left\"\>\"\<a href=\"\/wiki\/[a-zA-Z0-9_\(\):]+\" title=\"[a-zA-Z0-9 \(\)_:]+\"\>([a-zA-Z0-9 ]+)\<\/a\>\"\<\/td\>)[^]+?(\<td\>(([a-zA-Z]+)\&nbsp;([0-9]{1,2}),\&nbsp;([0-9]{4}))\<span style=\"display:none\"\>&nbsp;\(\<span class=\"bday dtstart published updated\"\>[0-9\-]+\<\/span\>\)\<\/span\>\<\/td\>)/;


