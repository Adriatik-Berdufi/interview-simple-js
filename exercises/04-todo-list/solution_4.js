const prompt = require("prompt-sync")();

let task = [];

function menu() {
  console.log("List Menu");
  console.log("1. Add Task");
  console.log("2. Remove Task");
  console.log("3. View Tasks");
  console.log("4. Exit");
}

function main() {
  menu();
  const choice = parseInt(prompt("Schegli una delle opsioni(1/2/3/4): "));

  switch (choice) {
    case 1:
      console.log("vuoi aggiungere una task...da fare ancora la funzione");
      break;
    case 2:
      console.log("vuoi rimuovere una task...da fare ancora la funzione");
      break;
    case 3:
      console.log(
        "vuoi vedere la lista delle task...da fare ancora la funzione"
      );
      break;
    case 4:
      console.log("vuoi chiudere...da fare:mettere tutto in un cilco while ");
      break;
    default:
      console.log("scelta invalida, inserire uno tra (1/2/3/4)");
  }
}
main();
