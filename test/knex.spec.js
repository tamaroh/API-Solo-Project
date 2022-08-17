const { expect, assert } = require("chai");
const knex = require("../src/knex");
describe("category", () => {
  it("should return result array", async () => {
    const result = await knex("category").select("*");
    expect(result).to.be.an.instanceOf(Array)
  });
});
