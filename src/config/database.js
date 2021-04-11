const path = require("path");

module.exports = {
  dialect: "sqlite",
  storage: path.join(__dirname, "../", "database", "todo.sqlite"),
};
