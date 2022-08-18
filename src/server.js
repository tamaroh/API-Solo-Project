const express = require("express");
const knex = require("./knex");
const env = require('dotenv').config();

const setupServer = () => {

    const app = express();
            
    app.get("/", (req, res) => {
        res.send('hello, world!')
    });
    
    app.get("/category", async (req, res) => {
        const result = await knex("category").select("*");
        res.json({result: result});
    })

    return app;
};

module.exports = {setupServer};