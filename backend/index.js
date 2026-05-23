const express = require("express")
const http = require("http")
const {Server}= require("socket.io")
const app = express()
const server = http.createServer(app)
const socket = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
let messages = []
const message = socket.of("/message")
message.on("connection",(socket,id)=>{
    console.log("connected")
    socket.emit("anymessage",messages)
    socket.on("newmsg",(msg)=>{
    messages.push(msg)
    console.log(msg)
    message.emit("anymessage",messages)
    })
    socket.on("disconnect",()=>{
        console.log("disconnected")
    })
})
server.listen(2000,()=>{
    console.log("server is running")
})