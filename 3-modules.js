// Modules - Encapsulated Code (only share minimum)
// Common JS, every file is a module (by default)

const names  = require('./4-names');
//console.log(names);
const sayHi = require('./5-utlis');

const data = require('./6-alternative-flavor');
console.log(data.items[0]);
require('./7-mind-grenade');
sayHi('susan')
sayHi(names.john);
sayHi(names.peter);