import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql2.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});



// DB_NAME="STORE"
// DB_PORT=3306
// DB_PASSWORD="442002"
// DB_HOST="localhost"
// DB_USER="root"


export default db;