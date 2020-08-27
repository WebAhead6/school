const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {findByUserEmail} = require('./../model/User.model')




// didint start here --working on find byemalil

// exports.authenticate = (req, res, next) => {
//     console.log('here bitch10');
//   findByUserEmail(req.body.email).then((userdata) => {
//       bcrypt.compare(req.body.password, userdata.password, function (err, result) {
//         if (err) {
//           return res.render('login', {
//             error: err.message
//           })
//         }
//         if (result) {

//           jwt.sign({
//             user: userdata.email
//           }, process.env.JWT_SECRET, function (err, token) {
//             if (err) {
//               console.log(err);
//               // handle error
//             } else {
//               console.log(token);
//               res.cookie('access_token', token, {
//                 httpOnly: true,
//                 maxAge: 9000
//               });
//               res.redirect("/")

//             }
//           });


//         } else {
//           res.render('login', {
//             error: "password is not matching ya masstoll"
//           })
//         }
//       });
//     })
//     .catch(error => {
//       res.render('login', {
//         error: error.message
//       })
//     })
//     res.redirect("/")


// };


exports.authenticate = async (req, res) => {
    try {
      const { password, email } = req.body;
      console.log(email);
      
      const user = await findByUserEmail(email);
        console.log('life', user)
      bcrypt.compare(password, user.password, function(err, result) {
        if (!result) {
            console.log("jj");
          return res.render('login', {
            activePage: { login: true },
            error: 'Password is incorrect'
          });
        }
  
        jwt.sign(user.username, process.env.JWT_SECRET, function(err, token) {
          if (err) {
              console.log(err);
            res.render('login', {
              activePage: { login: true },
              error: err.message
            });
          }
  
          res.cookie('access_token', token);
          console.log("hiiiii");

          res.redirect('/studentPage');
        });
      });
    } catch (error) {
        console.log(error);
      res.render('login', {
        activePage: { login: true },
        error: error.message
      });
    }
  };



  exports.logout = (req, res, next) => {
    res.clearCookie('access_token');
  
    res.redirect('/');
  
    next();
  };
  