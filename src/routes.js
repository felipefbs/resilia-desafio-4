const { Router } = require("express");
const TodoController = require("./controllers/TodoController");

const routes = Router();

// Rotas da Aplicação
routes.get("/", (req, res) => {
  return res.json({
    routes: {
      post: {
        "/todos":
          "Cria uma nova tarefa na sua todo list e retorna a nova tarefa",
      },
      get: {
        "/todos": "Retorna todas as tarefas da sua ToDo list",
        "/todo/:id": "Retorna uma tarefa da sua lista, a partir do id",
      },
      put: {
        "/todo/:id":
          "Altera uma tarefa da sua lista, a partir do id, e retorna o id da tarefa alterada",
      },
      delete: {
        "/todo/:id":
          "Remove uma tarefa da sua lista, a partir do id, e retorna o id da tarefa removida",
      },
    },
  });
});
// POST
routes.post("/todos", TodoController.createTodo);
// GET
routes.get("/todos", TodoController.getAllTodos);
routes.get("/todo/:id", TodoController.getTodo);
// PUT
routes.put("/todo/:id", TodoController.updateTodo);
// DELETE
routes.delete("/todo/:id", TodoController.deleteTodo);

module.exports = routes;
