var socket = new WebSocket("ws://localhost:8080/ws");

//Socket Client Connection
let connect = () => {
    console.log("Attempting Connection...");
  
    socket.onopen = () => {
      console.log("Successfully Connected");
    };
  
    socket.onmessage = msg => {
      console.log(msg);
    };
  
    socket.onclose = event => {
      console.log("Socket Closed Connection: ", event);
    };
  
    socket.onerror = error => {
      console.log("Socket Error: ", error);
    };
};
//Message Client
let sendMsg =  msg =>{
    console.log("sending msg:",msg)
    socket.send(msg);
};

export {connect, sendMsg};