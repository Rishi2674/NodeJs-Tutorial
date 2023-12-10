//npm - global command , comes with node
// npm --version or npm --v

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (stores info about package/project)
//manual approach (create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const { log } = require('console');
const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
log(newItems);