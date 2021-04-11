const { Model, DataTypes } = require("sequelize");

class Todo extends Model {
  static init(sequelize) {
    super.init(
      {
        task: DataTypes.STRING,
        done: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}
module.exports = Todo;
