const io = require("socket.io-client")

let socket = io("localhost:5000")

socket.on("message", (data)=>{
    console.log("Message ",data);
})