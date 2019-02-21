const knex = require("knex");
const paginator = require("knex-paginator");
const knexConfig = require("../knexfile");
const environment = process.env.ENV || "development";
console.log(environment);
const db = knex(knexConfig[environment]);
paginator(db);
module.exports = db;
