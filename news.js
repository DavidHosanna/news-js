/* !
* News.js 1.0, Auto typing text jQuery 
*
* (C) 2013, David Hosanna C http://david-hc.blogspot.com
* Licensed under a Creative Commons Attribution-NoDerivs 3.0 Unported License, http://creativecommons.org/licenses/by-nd/3.0/deed.en_US
* 
* https://github.com/DavidHosanna/news-js
*/
function doNews() {
mxText = newsText.length - 1;
dwAText = newsText[cnews];
setTimeout("addChar()",1000)
}
function addNews() {
cnews += 1;
if (cnews <= mxText) {
dwAText = newsText[cnews];
if (dwAText.length != 0) {
document.news.news2.value = "";
eline = 0;
setTimeout("addChar()",tspeed)
}
}
}
function addChar() {
if (eline!=1) {
if (cchar != dwAText.length) {
nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
document.news.news2.value = nmttxt;
cchar += 1;
if (cchar != dwAText.length) document.news.news2.value += "_";
} else {
cchar = 0;
eline = 1;
}
if (mxText==cnews && eline!=0 && ttloop!=0) {
cnews = 0; setTimeout("addNews()",tdelay);
} else setTimeout("addChar()",tspeed);
} else {
setTimeout("addNews()",tdelay)
}
}
doNews()
