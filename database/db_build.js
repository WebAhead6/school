const fs = require("fs");
const path = require("path");
const db = require("./db_connection");

const initPath = path.join(__dirname, "db_build.sql");
const initSQL = fs.readFileSync(initPath, "utf-8");



function build() {
    return db.query(initSQL);
  }
  
  module.exports = build;