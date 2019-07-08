const Cat = require('../models/cat');

module.exports = {
  index,
  createCat
};

function index(req, res) {
  Cat.find({}).then(cats => {
    res.json({
      cats
    });
  }).catch(err => console.log(err));
}

function createCat(req, res) {
  Cat.create(req.body.cat)
  .then(cat => {
    res.json({
      cat
    });
  }).catch(err => console.log(err))
}