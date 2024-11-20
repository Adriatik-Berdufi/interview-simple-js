const prompt = require("prompt-sync")();

let tasks = [];

function menu() {
  console.log("List Menu");
  console.log("1. Add Task");
  console.log("2. Remove Task");
  console.log("3. View Tasks");
  console.log("4. Exit");
}

//func add
function addTask() {
  const task = prompt("Inserisci la task: ");
  tasks.push(task);
}

function main() {
  let exit = false;
  while (!exit) {
    menu();
    const choice = parseInt(prompt("Schegli una delle opzioni(1/2/3/4): "));

    switch (choice) {
      case 1:
        addTask();
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
        exit = true;
        break;
      default:
        console.log("Scelta invalida, inserire uno tra (1/2/3/4)");
    }
  }
}
main();
