const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('home-template.pug');

console.log(compiledFunction());

// Render a set of data
// console.log(compiledFunction({
//   name: 'Timothy'
// }));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
// console.log(compiledFunction({
//   name: 'Forbes'
// }));
// "<p>Forbes's Pug source code!</p>"


// Compile template.pug, and render a set of data
// console.log(pug.renderFile('template.pug', {
//   name: 'Timothy'
// }));
// "<p>Timothy's Pug source code!</p>"

// console.log(pug.render('p Hello world!'));

