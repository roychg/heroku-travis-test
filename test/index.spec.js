const expect = require("chai").expect;
const server = require("../index");

describe("/GET ROOT", () => {
  it("should return a string", async () => {
     await expect("ci with travis").to.equal("ci with travis");
  });
});
