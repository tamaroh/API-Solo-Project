const { expect, assert } = require("chai");
const knex = require("../src/knex");
describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex('category')
        .select()
        .catch(() => assert.fail("category table is not found."));
    });
  });

describe("category", () => {
  it("should return result array", async () => {
    const result = await knex("category").select("*");
    expect(result).to.be.an.instanceOf(Array)
  });
  describe("item", () => {
    it("should return result array", async () => {
      const result = await knex("item").select("*");
      expect(result).to.be.an.instanceOf(Array)
    });
  });
});

