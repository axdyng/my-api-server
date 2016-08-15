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
          profileURL: 'https://lovelace-media.imgix.net/uploads/1406/c93b8060-2b3e-0134-0660-062f3a35be5f.PNG',
          name: 'Dylan',
          Profession: 'Pokemon Trainer',
          Quote: "A caterpie may change into Butterfree, but the heart beating inside remains to same."
        }, done);
    });

  });
});
