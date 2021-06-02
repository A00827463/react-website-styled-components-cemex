// Sbastian Rodriguez
// Dependencies: express, bcrypt, mssql
// Global Dependencies: nodemon

const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const sql = require("mssql");
const cors = require("cors");
const config2 = require("./config2");

app.use(express.json());
app.use(cors());

const dbUsers = [];


/*-------------- USERS (Not Used) --------------*/
// For Leadreboards
// app.get("/users", (req, res) => {
//   res.json(dbUsers);
// });

// app.post("/users", async (req, res) => {
//   try {
//     await sql.connect(config2);
//     const result = await sql.query`SELECT * FROM Users WHERE Users.Email = ${req.body.email}`
//     // const result = await sql.query`SELECT * FROM Users WHERE Users.Email = Ariel@Ariel.com`
//     // const result = await sql.query`SELECT * FROM Users`
//     // dbUsers.push(result);
//     console.log(result);
//     res.json(result);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });


/*-------------- LOGIN  --------------*/
// For Login Validation
// app.get("/login", (req, res) => {
//   res.json(dbUsers);
// });

app.post("/login", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`SELECT * FROM Users WHERE Users.Email = ${req.body.email}`
    // const result = await sql.query`SELECT * FROM Users`
    // dbUsers.push(result);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});


/*-------------- SIGNUP  --------------*/
// To register new user
app.post("/signup", async (req, res) => {
  try {
    await sql.connect(config2);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await sql.query`INSERT INTO Users VALUES(${req.body.id}, ${req.body.name}, ${req.body.lastName}, ${req.body.admin}, ${req.body.email}, ${hashedPassword}, 0)`
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/*-------------- LeaderBoard  --------------*/
app.post("/users", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`SELECT * FROM Users`
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/*-------------- Unity  --------------*/
app.get("/unity/:ID", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`SELECT * FROM Users WHERE Users.UserID = ${req.params.ID}`
    console.log(result);
    res.json(result.recordset[0]);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3001);
