var {readFileSync} = require('fs'),
rgx = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
module.exports = file => {
return Urls(file)
}
// filter(ln => rgx.test(ln))
function Urls(file) {
var main = readFileSync(file).toString().split('\n');
return [...new Set(main)].filter(Boolean).filter(ln => rgx.test(ln)).map((ln,index) => {

return {
    number:Indices(main,ln),
    urls:[...new Set(ln.match(rgx))]
}
})
}
function Indices(arr,val){
var indices = [];
arr.filter((ar,index) => {
if(ar==val) indices.push(index+1)
})
return indices
}