const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: "db",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
