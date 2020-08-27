const model = require('./../model/model');

exports.get = ('/wall', (req, res) => {
    model.getAllPosts()
      .then(result => {
        console.log(result);
        res.render("wall", {
          data: result
        })
      });
  })