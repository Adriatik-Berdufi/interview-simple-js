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
//func remove task
function removeTask() {
  viewTasks();

  const taskToRemove = parseInt(
    prompt("Iserisci il nr del task da cancellare: ")
  );
  if (taskToRemove >= 0 && taskToRemove <= tasks.length) {
    const removedTask = tasks.splice(taskToRemove - 1, 1);
    console.log(`La task ${removedTask} e stata eliminata con successo.`);
  } else {
    console.log("Inserire un nr di task valido:");
    removeTask();
  }
}
//func view tasks
function viewTasks() {
  if (tasks.length == 0) {
    console.log("Non ci sono ancora Task aggiunte.");
  } else {
    console.log("Task List");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task}`);
    });
  }
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
        removeTask();
        break;
      case 3:
        viewTasks();
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
