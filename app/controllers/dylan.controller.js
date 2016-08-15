module.exports = {
  index: function(req, res) {
    res.jsonp({
      profileURL: 'https://lovelace-media.imgix.net/uploads/1406/c93b8060-2b3e-0134-0660-062f3a35be5f.PNG',
      name: 'Dylan',
      Profession: 'Pokemon Trainer',
      Quote: "A caterpie may change into Butterfree, but the heart beating inside remains to same."
    });
  }
};
