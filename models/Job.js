const Sequelize = require('sequelize');
const db = require('../db/conection.js');
const sequelize = require('../db/conection.js');

const Job = db.define('jobs', {
    title: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.STRING,
    }
});

module.exports = Job
