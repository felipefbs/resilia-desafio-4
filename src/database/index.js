const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Todo = require("../models/Todo");

const connection = new Sequelize(dbConfig);

Todo.init(connection);

module.exports = connection;
