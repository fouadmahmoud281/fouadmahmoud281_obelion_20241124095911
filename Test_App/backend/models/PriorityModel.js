const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Test_', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Priority extends Model {}

Priority.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM('High', 'Medium', 'Low'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Priority',
  tableName: 'priorities',
  timestamps: false,
});

module.exports = Priority;