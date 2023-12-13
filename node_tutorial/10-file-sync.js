const { log } = require('console');
const {readFileSync , writeFileSync } = require('fs')
log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
log(first,second);
writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first},${second}   `,
    {flag : 'a'});
log('done with this task');
log('starting with the next task');