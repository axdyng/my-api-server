var app = require('../app'),
    request = require("request"),
    supertest = require("supertest"),
    base_url = "http://localhost:3000/";


describe("Express Server API", function () {
  describe('should return users json on get /dylan', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/dylan')
        .expect('Content-Type', /jsonp/)
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
          profileURL: 'http://v030o.popscreen.com/eHNqbWd6MTI=_o_pokemon-profiles-dragonite-149.jpg',
          name: 'Dylan',
          profession: 'Pokemon Trainer',
          quote: "A caterpie may change into a butterfree, but the heart beating inside remains the same."
        }, done);
    });

  });
});
