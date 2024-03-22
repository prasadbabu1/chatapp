// import { io } from "socket.io-client";
const {io} = require("socket.io-client")
console.log(io);










// const { application } = require("express");

// const conversationElem = document.getElementById("conversation-container")
// fetch("htpp://localhost:8080/customer",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//     name:"ganith",
//     email:"ganith@gmail.com",
//     phone:9988776611
//   })
// })


// function sendMessage(e){
//     e.preventDefault();

//     const userMessage = getInputValue();

//     const msgContent ={
//         author:"user",
//         message:userMessage
//     }
//          fetch("http://localhost:8080/cat-message")
//          .then((res)=> res.json())
//          .then(data => {
//           console.log(data)
//           updateConversation(data)
//          })



    
//     updateConversation(msgContent)
// };

// function getInputValue(){
//     const inputvalue = document.getElementById("user-input")
//     const input = inputvalue.value;
//     inputvalue.value = ""
//     return input
// }

// function updateConversation(object){
//     const{author,message}=object;
//     const para = document.createElement("p");
//     para.classList.add("message",author);

//     para.innerHTML = `<span>${message}</span>`
//     conversationElem.append(para)
// }


 



// const obj = {
//     arr1 :  ["a","b","c"],
//     obj1:{
//         a:{id:"123"},
//         b:{id:"145"}
//     }
// }
// obj.arr1.map((item) =>{
//     console.log(obj.obj1[item])
// })