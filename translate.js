#!/usr/bin/env node
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://translate.google.com/?hl=ja')
  .wait('#gt-sl-sugg > div[value="ja"]')
  .wait('#gt-tl-sugg > div[value="en"]')
  .click('#gt-sl-sugg > div[value="ja"]')
  .click('#gt-tl-sugg > div[value="en"]')
  .insert('#source', process.argv[2])
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
