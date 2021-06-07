#!/usr/bin/env node
const dead = require('./App')
const chalk = require('chalk')

dead('./lol.md').forEach(element =>
  element.urls.forEach(async lol => {
    const shey = (await lol)
    if (!shey.stats) console.log(chalk.redBright.bold(shey.url + ' : IS DEAD'))
  })
)
