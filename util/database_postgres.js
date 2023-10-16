const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'postgres', 'root', { dialect: 'postgres', host: 'localhost' });

module.exports = sequelize;
