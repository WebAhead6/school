const model = require('./../model/model');


exports.get = ('/teacherPage', (req, res) => {
  model.getStudents()
    .then(result1 => {
      console.log("teachr result 1 ", result1);

      res.render("teacher", {
        data: result1,
      })
    })
})


exports.post = ('/fill', (req, res) => {
  model.fillGrades(req.body)
  res.redirect('/teacherPage')
})




exports.studentClasses = (req, res) => {
  console.log(req.params.id);
  model.getStudentClasses(req.params.id).then((result) => {
    res.send(result)
  })

}

function name(params) {
  // model.getStudents()
  // .then(result => {
  //   res.render("teacher", {
  //     data: result
}