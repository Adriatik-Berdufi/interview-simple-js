const promt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 10 + 1);

let maxTentativi = 3;

function guessUser() {
  console.log("Trova il nr che ho in mente da 1 a 10");

  while (maxTentativi > 0) {
    const userGuess = parseInt(promt("scegli il tuo nr: "));

    if (isNaN(userGuess)) {
      console.log("devi inserire un nr");
    } else if (userGuess == randomNumber) {
      console.log("Bravo hai trovato il nr");
      return;
    } else {
      if (userGuess > randomNumber) {
        maxTentativi--;
        console.log(
          `il tuo nr e piu grande, ti rimangono ancora ${maxTentativi}`
        );
      } else {
        maxTentativi--;
        console.log(`il nr e piu piccolo, ti rimangono ancora ${maxTentativi}`);
      }
    }
  }
}
guessUser();
