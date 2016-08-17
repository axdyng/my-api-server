var app = require('../app'),
    request = require("request"),
    supertest = require("supertest"),
    base_url = "http://localhost:3000/";


describe("Express Server API", function () {
  describe('should return users json on get /dylan', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/dylan')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns status code 404 if url invalid", function (done) {
      supertest(app)
      .get('/dylanHahaha')
      .expect(404, done);
    });

    it("returns a correct json format", function (done) {
      supertest(app)
        .get('/dylan')
        .expect({
          profileURL: 'http://pm1.narvii.com/5847/30a4b49a069109f96ee55b61b2788d496095977a_hq.jpg',
          name: 'Dylan',
          profession: 'Trainer',
          quote: "A caterpie may change into a butterfree, but the heart beating inside remains the same."
        }, done);
    });

  });
});
