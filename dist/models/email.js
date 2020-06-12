const Sequelize = require('sequelize');
const db = require('../config/database');

const Email = db.define('email', {
    subscriber_email: {
        type: Sequelize.STRING
    }
})


module.exports = Email;