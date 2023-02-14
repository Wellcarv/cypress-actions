const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImJhNWIxMmNhLTZmMzktNDdhMy1iYWMyLTgwNDhmOWUwOWQ2My0xNjc2Mzk1ODM5NTgwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjc1NGI4M2MtNTY2MC00YWRjLWFjMjYtYjA0MjI5NmRlNzM2IiwidHlwZSI6InQifQ.HB2Oh-1Znc8Pevk-HdxtdDcLs8CDG6lK5b6MYwEaCuo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
