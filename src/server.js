const express = require("express");
const knex = require("./knex");
const env = require('dotenv').config();

const setupServer = () => {

    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send('hello, my app!')
    });
    
    app.get("/category", async (req, res) => {
        const result = await knex("category").select("*");
        res.json(result);
    })

    app.get("/item", async (req, res) => {
        const result = await knex("item").select("*");
        res.json(result);
    })

    app.get("/item/:id", async (req, res) => {
        const result = await knex("item").select("name").where({"id": req.params.id});
        res.json(result);
    })

    app.post("/item", async (req, res) => {
        const result = await knex("item").insert(req.body);
        res.json(req.body);
    })
    return app;
};

module.exports = {setupServer};