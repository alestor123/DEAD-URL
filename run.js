const dead = require('./App')
const chalk = require('chalk')

dead('./lol.md').forEach(element =>
  element.urls.forEach(async lol => {
    const shey = (await lol)
    if (!shey.stats) console.log(chalk.redBright.bold(shey.url + ' : IS DEAD'))
  })
)

// dead('./lol.md').forEach(async el => console.log(chalk.greenBright.bold((await el.urls[0]).url) + ' at line number : ' + chalk.redBright.bold(el.number.join(','))))
// const lol = ['https://www.npmjs.com/package/url-exist', 'https://stackoverflow.com/questions/26007187/node-js-check-if-a-remote-url-exists', 'https://stackoverfloweded.com/questions/26007187/node-js-check-if-a-remote-url-existsdeeeeeeee']
// lol.forEach(async urls => console.log(urls + ' : ' + await Check(urls)))
