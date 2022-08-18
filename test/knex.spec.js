const { expect, assert } = require("chai");
const knex = require("../src/knex");
const chaiHttp = require("chai-http");
require("chai").use(chaiHttp);
const { setupServer } = require("../src/server");

describe("myapp test", () => {
  let server, request;
  beforeEach(() => {
    server = setupServer();
    request = require("chai").request(server);
  });
  describe("setup", () => {
    it("should connect to database", () => {
      // this test passes even if database is not exist
      knex.raw("select 1 as result").catch(() => {
        assert.fail("failed test 1");
      });
    });

    it("should return a string if accessed to top route", () => {
      // this test passes even if database is not exist
      request
        .get("/")
        .then((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res).to.equal("hello, my app!");
        })
        .catch(() => assert.fail("failed test 2"));
    });
  });

  describe("category", () => {
    it("should return result array", () => {
      request.get("/category").then((err, res) => {
        chai.expect(res).to.be.a.instanceOf(Array);
      });
    });
  });

  describe("item", () => {
    it("should return result array", async () => {
      const result = await knex("item").select("*");
      expect(result).to.be.an.instanceOf(Array);
    });
  });
});
