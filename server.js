const server =  require("http").createServer()
const io = require("socket.io")(server)
const PORT = 5000

server.listen(PORT ,()=>{
    console.log(`server listening on ${PORT}...`);
})

io.on('connection' , (socket)=>{
    console.log('a user connected...');
})
