const model = require('./../model/model');



exports.get = ('/autoStudentsNames', (req, res) => {

    model.getStudents()
      .then(result => {
        console.log(result);
        res.render("student", {
          data: result
        })
      });
  
  })
  