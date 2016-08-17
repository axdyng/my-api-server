module.exports = {
  index: function(req, res) {
    res.jsonp({
      profileURL: 'http://pm1.narvii.com/5847/30a4b49a069109f96ee55b61b2788d496095977a_hq.jpg',
      name: 'Dylan',
      profession: 'Trainer',
      quote: "A caterpie may change into a butterfree, but the heart beating inside remains the sameaaaaa."
    });
  }
};
