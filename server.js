// import express
// const { Socket } = require("socket.io");
const express = require("express");

// import http server
const http = require("http")
const PORT = process.env.PORT || 8080 ;

// create express server
const expressServer = express();
expressServer.use((req,res,next)=>{
    console.log("heyy ----> this is a middleware")
//    res.send("heyy just testing")
   next();
});



// modify express server to http
const httpServer = http.createServer(expressServer)

// import socket.io
const socketIo = require("socket.io")
// console.log(socketIo)
const SocketServer = socketIo.Server;

// create an object of SocketServer require to create io
const io = new SocketServer(httpServer);
//when ever we create the connection we get the socket
//when browser connects to the server,is performs connection event
io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on ("message event",(data)=>{
        io.emit("message event",data)
    } )
})

expressServer.use((express.static("./public"))) 


httpServer.listen(PORT, ()=>{
    console.log(`server has build successfully and listening to port ${PORT}`);
})