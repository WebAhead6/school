const model = require('./../model/model');


exports.get = ('/studentPage', (req, res) => {
    model.getStudents()
      .then(result => {
        console.log("getstudents", result);
        res.render("student", {
          data: result
        })
      });
  })

  exports.post = ('/studentPost', (req, res) => {

    model.fillpost(req.body)
    res.redirect('/studentPage')
  
  })