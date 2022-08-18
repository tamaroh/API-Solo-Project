const { expect, assert } = require("chai");
const knex = require("../src/knex");
const chaiHttp = require("chai-http");
require("chai").use(chaiHttp);
const { setupServer } = require("../src/server");
const { seed } = require("../db/seeds/item");

describe("myapp test", () => {
  let server, request;
  beforeEach(() => {
    server = setupServer();
    request = require("chai").request(server);
    seed(knex);
  });
  after(async () => {
    await knex("item").del();
  });

  describe("setup", () => {
    it("should connect to database", () => {
      // this test passes even if database is not exist
       knex.raw("select 1 as result").catch(() => {
        assert.fail("failed test 1");
      });
    });

    it("should return a string if accessed to top route",  async () => {
      // this test passes even if database is not exist
      const res = await request.get("/");
          expect(res.text).to.equal("hello, my app!");
    });
  });

  describe("category", () => {
    it("should return result array", async () => {
      const res = await request.get("/category");
        expect(res.body).to.be.a.instanceOf(Array);
    });
  });

  describe("item", () => {
    it("should return item array", async () => {
      const res = await request.get("/item");
        expect(res.body).to.be.a.instanceOf(Array);
    });
    it("should return items", async () => {
      const res = await request.get("/item");
        expect(res.body.length).to.equal(3);
      })
    it("should return an item if id is given", async () => {
      const res = await request.get("/item/3");
      expect(res.body[0].name).to.equal('stray');
    })
  });
});
