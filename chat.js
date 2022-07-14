const io = require("socket.io-client")

let socket = io("http://94.103.83.34:5000")

socket.on("message", (data)=>{
    console.log("Message ",data);
})