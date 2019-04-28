const expect = require("chai").expect;
const server = require("../index");
let chaiHttp = require("chai-http");
let chai = require("chai");
let should = chai.should()


chai.use(chaiHttp);

describe("/GET ROOT", () => {
  it("should return an object", done  => {
     chai.request(server)
      .get('/')
      .end((err, res) => {
        console.log(res.body)
        res.should.have.status(200)
        // expect(`${res.body}`).to.equal()
        res.body.should.have.property('testing')
        res.body.testing.should.eql([1,2,3,4,5,6])
        done()
      })

  });
});
