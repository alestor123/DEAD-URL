var dead = require('./App')
const string = "hei dude, check this link <a href='https://github.com/alestor123' http://google.com and http:://youtube.com"
const matches = string.match(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig);
console.log(matches);
console.log(dead('./lol.md'))