module.exports = {
  index: function(req, res) {
    res.jsonp({
      profileURL: 'http://v030o.popscreen.com/eHNqbWd6MTI=_o_pokemon-profiles-dragonite-149.jpg',
      name: 'Dylan',
      profession: 'Pokemon Trainer',
      quote: "A caterpie may change into a butterfree, but the heart beating inside remains the same."
    });
  }
};
