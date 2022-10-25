const server = require('http').createServer()
const io = require('socket.io')(server,{
    cors:{
        origin:"http://localhost:5000",
        methods:['GET','POST']
    }
})
// port
const PORT = 5000



server.listen(PORT , ()=>{
    console.log(`server running at ${PORT}...`);
})

io.on('connection' ,(socket)=>{
    console.log('user connected');    
})
