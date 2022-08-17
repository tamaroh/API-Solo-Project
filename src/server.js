const express = require("express");
const knex = require("./knex");
const env = require('dotenv').config();
const app = express();

const port = process.env.DB_PORT || 3000;

app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})

app.get("/", (req, res) => {
    res.send('hello, world!')
});

app.get("/category", async (req, res) => {
    const result = await knex("category").select("*");
    res.json({result: result});
})