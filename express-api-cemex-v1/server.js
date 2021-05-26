// Sbastian Rodriguez
// Dependencies: express, bcrypt, mssql
// Global Dependencies: nodemon

const express = require("express");
const app = express();
// const bcrypt = require('bcrypt');
const sql = require("mssql");
const config2 = require("./config2");

app.use(express.json());

const dbUsers = [];


/*-------------- USERS (Not Used) --------------*/
// For Leadreboards
// app.get("/users", (req, res) => {
//   res.json(dbUsers);
// });

app.post("/users", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`SELECT * FROM Users WHERE Users.Email = ${req.body.email}`
    // const result = await sql.query`SELECT * FROM Users WHERE Users.Email = Ariel@Ariel.com`
    // const result = await sql.query`SELECT * FROM Users`
    // dbUsers.push(result);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});


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
app.get("/signup", (req, res) => {
  res.json(dbUsers);
});

app.post("/signup", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`INSERT INTO Users VALUES(null, null, null, 0, ${req.body.email}, ${req.body.password}, null)`
    // const result = await sql.query`SELECT * FROM Users`
    // dbUsers.push(result);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/*-------------- LOGOUT  --------------*/
// To register new user
app.get("/loogout", (req, res) => {
  res.json(dbUsers);
});

app.post("/logout", async (req, res) => {
  try {
    await sql.connect(config2);
    // const result = await sql.query`SELECT * FROM Users WHERE Users.Name = ${req.body.name}`
    const result = await sql.query`SELECT * FROM Users`
    dbUsers.push(result);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

/*-------------- LeaderBoard  --------------*/
// To register new user
// app.get("/leaderboard", (req, res) => {
//   res.json(dbUsers);
// });

app.post("/leaderboard", async (req, res) => {
  try {
    await sql.connect(config2);
    const result = await sql.query`SELECT * FROM Users`
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3001);
