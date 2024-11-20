const app = Vue.createApp({
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async loadTodos() {
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
    },
  },
  mounted() {
    this.loadTodos();
  },
});

app.mount("#app");
