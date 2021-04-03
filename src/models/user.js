const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5,
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5,
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
})

module.exports = User;