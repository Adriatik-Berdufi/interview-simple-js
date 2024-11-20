const app = Vue.createApp({
  data() {
    return {
      todos: [],
      newTaskTitle: "",
      newTaskState: false,
    };
  },
  methods: {
    /*     async loadTodos() {
      try {
        //carico il todos.json
        const response = await fetch(
          "exercises/06-todo-list-persistent-state/todos.json"
        );
        const data = await response.json();
        this.todos = data;
      } catch (error) {
        console.error("Errore durante il caricamento...:", error);
      }
    }, */
    loadTodos() {
      const storedTodos = localStorage.getItem("todos");
      //carico lo localstorage
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
    addTask() {
      if (this.newTaskTitle.trim() == "") {
        alert("Il titolo non può essere vuoto");
        return;
      }
      // add task alla lista
      this.todos.push({
        title: this.newTaskTitle,
        state: this.newTaskState,
      });
      this.saveTodos();
      // Reset campi del form
      this.newTaskTitle = "";
      this.newTaskState = false;
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted() {
    this.loadTodos();
  },
});

app.mount("#app");
