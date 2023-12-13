const { log } = require('console');
const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    log(`data received user ${name} with id ${id}`);
})
customEmitter.on('response',()=>{
    log(`some other logic here`);
})

customEmitter.emit('response','john',65)
//order matters , first listen to the response and then emit it