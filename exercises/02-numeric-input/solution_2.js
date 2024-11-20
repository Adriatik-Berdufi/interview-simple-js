const prompt = require("prompt-sync")();

const userNum = parseInt(prompt("inserisci un numero positivo: "));
if (isNaN(userNum)) {
  console.log("deve esser un mumero positivo");
} else if (userNum < 0) {
  console.log("devi inserire un numero positivo");
} else {
  for (let i = 0; i <= userNum; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
