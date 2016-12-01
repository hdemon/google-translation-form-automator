#!/usr/bin/env node
var Nightmare = require('nightmare');
var program = require('commander');
var nightmare = Nightmare();

program
  .version('0.0.1')
  .arguments('<text>')
  .option('-f, --from [language]', 'a language you want to translate from')
  .option('-t, --to [language]', 'a language you want to translate to')
  .action(function(text) {
    nightmare
      .goto('https://translate.google.com/?hl=ja')
      .wait('#gt-sl-sugg > div[value="ja"]')
      .wait('#gt-tl-sugg > div[value="en"]')
      .click('#gt-sl-sugg > div[value="' + program.from + '"]')
      .click('#gt-tl-sugg > div[value="' + program.to + '"]')
      .insert('#source', text)
      .click('#gt-submit')
      .wait('#result_box > span')
      .evaluate(function () {
        return document.querySelector('#result_box').innerHTML.replace(/<\/*span>/g, '');
      })
      // .end()
      .then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });

program.parse(process.argv);
