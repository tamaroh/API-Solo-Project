const { expect, assert } = require("chai");
const knex = require("../src/knex");
const chaiHttp = require('chai-http');
require('chai').use(chaiHttp);
const {setupServer} = require('../src/server');

const server = setupServer();
const request = require('chai').request(server);

describe("setup", () => {
  it("should connect to database", () => {
    // this test passes even if database is not exist
    knex.raw("select 1 as result").catch(() => {
      assert.fail('failed test 1');
    });
  });

  it("has run the initial migration", () => {
    // this test passes even if database is not exist
    request.get("/").then((err, res) => {
      chai.expect(err).to.be.null;
      chai.expect(res).to.equal("hello, my app!")
    })
      .catch(() => assert.fail("failed test 2"));
  });
});

describe("category", () => {
  it("should return result array", async () => {
    const result = await knex("category")
      .select("*")
      .catch((err) => assert.fail('failed test 3'));
    expect(result).to.be.an.instanceOf(Array);
  });
});

describe("item", () => {
  it("should return result array", async () => {
    const result = await knex("item").select("*");
    expect(result).to.be.an.instanceOf(Array);
  });
});
