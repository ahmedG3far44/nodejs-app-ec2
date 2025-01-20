import express from "express";
import dotenv from "dotenv";
import db from "./database/dbConfig.js";
dotenv.config();

const app = express();

app.use(express.json());

db.connect((error) => {
  error
    ? console.log("db connection failed!!")
    : console.log("db connection success!!");
});

app.get("/", (req, res) => {
  return res.send("App is running good.");
});

app.get("/api/users", async (req, res) => {
  try {
    const getUsersQuery = `SELECT * FROM USERS;`;
    const users = db.query(getUsersQuery, (error, response) => {
      if (error) {
        throw new Error(error.message);
      }
      return res.status(200).json({
        success_code: 200,
        message: "successful message done.",
        data: response,
      });
    });

    // console.log(users);
  } catch (error) {
    return res.status(500).json({ error_code: 500, message: error.message });
  }
});
app.listen(process.env.PORT | 4000, () => {
  console.log("app is running in port", process.env.PORT);
});
