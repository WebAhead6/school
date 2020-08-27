const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')
const model = require('./model/model');
const bodyParser = require('body-parser');
const controllers = require('./controllers/index');
var cookieParser = require('cookie-parser')



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser())



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.engine(
  "hbs", exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials")

  })
)
//app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(controllers);// use index/router file at controllers







// app.get('/', (req, res) => {
//   res.render("home")
// })



// app.get('/wall', (req, res) => {
//   model.getAllPosts()
//     .then(result => {
//       console.log(result);
//       res.render("wall", {
//         data: result
//       })
//     });
// })

// app.get('/teacherFill', (req, res) => {
//   model.getStudents()
//     .then(result => {
//       console.log("getstudents", result);
//       res.render("teacher", {
//         data: result
//       })
//     });
// })

// app.get('/studentPage', (req, res) => {
//   model.getStudents()
//     .then(result => {
//       console.log("getstudents", result);
//       res.render("student", {
//         data: result
//       })
//     });
// })


// app.post('/studentPost', (req, res) => {

//   model.fillpost(req.body)
//   res.redirect('/studentPage')

// })

// app.post('/fill', (req, res) => {
//   model.fillGrades(req.body)
//   res.redirect('/teacherFill')
// })

// app.get('/autoStudentsNames', (req, res) => {

//   model.getStudents()
//     .then(result => {
//       console.log(result);
//       res.render("student", {
//         data: result
//       })
//     });

// })




module.exports = app