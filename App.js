const { readFileSync } = require('fs')
const rgx = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig
module.exports = file => Urls(file)
// filter(ln => rgx.test(ln))
// still need fix for lot of stuff
function Urls (file) {
  const main = readFileSync(file).toString().split('\n')
  // console.log(rgx.test('- __[pica]()__ - high quality and fast image'))
  // [...new Set(main)].filter(Boolean).forEach(ln => console.log(chalk.bold.greenBright(ln)+' : ' + chalk.bold.redBright(rgx.test(ln)) ))
  return [...new Set(main)].filter(Boolean).filter(ln => ln.match(rgx)).map((ln, index) => {
    return {
      number: Indices(main, ln),
      urls: [...new Set(ln.match(rgx))]
    }
  })
}
function Indices (arr, val) {
  const indices = []
  arr.filter((ar, index) => {
    if (ar === val) indices.push(index + 1)
  })
  return indices
}
