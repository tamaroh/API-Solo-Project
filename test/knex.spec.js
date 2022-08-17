const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

describe("server setup", () => {
  it("should connect to database", () => {
    knex.raw("select 1 as result").catch(() => {
      assert.fail("unable to connect to database");
    });
  });
  it("has run the initial migration", () => {
    knex("category")
      .select()
      .catch(() => assert.fail("category table is not found."));
  });

});
