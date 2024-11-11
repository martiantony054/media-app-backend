// 1  import json server
const jserver = require('json-server')

// 2  create a server application using json server
const mediaserver = jserver.create()

// 3  create a middelware used by json server
const middle = jserver.defaults()

// 4  setup route for db.json
const router = jserver.router('db.json')

// 5  Applying middleware to the server
mediaserver.use(middle)

//6   Applying router to the server
mediaserver.use(router)

// 7  Setting the port 
const port = 3000

// 8  Staring the server
mediaserver.listen(port,()=>{
    console.log("media server started....listening on "+port);
})
