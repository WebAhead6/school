const model = require('./../model/model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.get = ('/adminPage', (req, res) => {
    res.render("admin")
})



exports.post = ('/addstudent', (req, res, err) => {
    if (req.body.password !== req.body.confirmPassword) {
      return  res.render('admin', {
            error: "password do not match bitch"
        })
    } else {
        bcrypt.hash(req.body.password, saltRounds, function (err, hashPass) {
            console.log('hashPass',hashPass);

            if (err) {
                return res.render('admin', {
                    error: err.message
                })
            }
            let role = req.body.role
            if (role === 'admin') {
                model.addAdmin(req.body, hashPass).catch(error => {
                    return res.render('admin', {
                        error: error.message
                    })

                })
            } else if (role === 'teacher') {
                model.addTeacher(req.body, hashPass).catch(error => {
                  return  res.render('admin', {
                        error: error.message
                    })

                }) 
            } else if (role === 'student') {
                model.addStudent(req.body, hashPass).catch(error => {
                    return  res.render('admin', {
                        error: error.message
                    })
                }) 
            }
          //  res.redirect('/admin')
        })
    }

    })
