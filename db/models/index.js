"use strict"
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../config/database.js")[process.env.NODE_ENV];
const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== "index.js")
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file))
        db[model.name] = model
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;