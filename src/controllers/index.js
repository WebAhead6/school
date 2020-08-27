const express = require('express');
const path = require('path')
const router = express.Router();

const home = require('./home');
const wall = require('./wall');
const teacher = require('./teacher');
const student = require('./student');
const autoStudentsNames = require('./autoStudentsNames');
const admin = require('./admin');
const login = require('./login');
const auth = require('./auth');
const middlewares = require('../middlewares');



router.get('/',  middlewares.authCheck, home.get);
router.post('/authenticate', auth.authenticate );


router.get('/autoStudentsNames', autoStudentsNames.get);

router.get('/login', login.get);
router.post('/login', login.post);


router.get('/wall', wall.get);

router.get('/teacherPage', teacher.get);
router.post('/fill', teacher.post);
//: two .. it makes it dinamic 
router.get('/studentClasses/:id',teacher.studentClasses)

router.get('/studentPage', student.get);
router.post('/studentPost', student.post);

router.get('/adminPage', admin.get);
router.post('/addStudent', admin.post);








module.exports = router;