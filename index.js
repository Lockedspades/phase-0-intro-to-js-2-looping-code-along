// Code your solutions in this file
const names = ["Lesly", "Yuviana", "Melanny", "Lindsey", "Garey"];

function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
      }
    return messages;
  }
  console.log(writeCards(names, "birthday"))
  function countDown (num){
    let x = num;
    while (x >= 0){
        console.log(x);
        x--;
    }
  }