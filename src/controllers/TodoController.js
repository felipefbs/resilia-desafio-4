const Todo = require("../models/Todo");

module.exports = {
  async createTodo(req, res) {
    const { task } = req.body;

    const todo = await Todo.create({ task, done: false });

    return res.json({ todo });
  },

  async getAllTodos(req, res) {
    const todos = await Todo.findAll();

    if (todos.length === 0) {
      return res.json({ status: "no todos in database" });
    }

    return res.json(todos);
  },

  async getTodo(req, res) {
    const id = req.params.id;

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(400).json({ error: "Todo not found" });
    }

    return res.json(todo);
  },

  async updateTodo(req, res) {
    const id = req.params.id;
    const updateRequest = req.body;

    let todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(400).json({ error: "Todo not found" });
    }

    await Todo.update(
      { task: updateRequest.task, done: updateRequest.done },
      {
        where: {
          id,
        },
      }
    );

    return res.json({ id: todo.id });
  },

  async deleteTodo(req, res) {
    const id = req.params.id;

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(400).json({ error: "Todo not found" });
    }

    await Todo.destroy({ where: { id } });

    return res.json({ id: todo.id });
  },
};
