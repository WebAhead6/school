const db = require("../../database/db_connection");
//we bass hashPass2 form the admin page bcript 
// functions from admin post to new users #############################################
function addStudent(data, hashPass) {
  const personalData = [data.name, data.age, data.gender, data.email];
  const subjectinfo = [data.role, data.password, data.email]
  const subjectId = []
  // "INSERT INTO class_student(student_id, class_id, grade) studentClass($1, $2, $3)",
  return db.query(
    "INSERT INTO students(studentname, age, gender, email) VALUES($1, $2, $3, $4) RETURNING id",
    personalData
  ).then((result) => {
    subjectId.push(result.rows[0].id)
    const id = result.rows[0].id
    if (typeof data.class === 'string') {
      return db.query(
        "INSERT INTO class_student(student_id, class_id) VALUES($1,$2 ) ", [id, data.class]
      )
    } else {
      data.class.map(x =>
        db.query(
          "INSERT INTO class_student(student_id, class_id) VALUES($1,$2 ) ", [id, x]
        )
      );
    }
  }).then(() => {
    return db.query(
      "INSERT INTO users(student_id, role,password,email) VALUES($1,$2,$3,$4 ) ", [subjectId[0], subjectinfo[0], hashPass, subjectinfo[2]]
    )
  })
}

//we bass hashPass2 form the admin page bcript 
function addTeacher(data, hashPass) {
  const personalData = [data.name, data.age, data.gender, data.email];
  const subjectinfo = [data.role, data.password, data.email]
  const subjectId = []
  // "INSERT INTO class_student(student_id, class_id, grade) studentClass($1, $2, $3)",
  return db.query(
    "INSERT INTO teacher(teachername, age, gender, email) VALUES($1, $2, $3, $4) RETURNING id",
    personalData
  ).then((result) => {
    subjectId.push(result.rows[0].id)
    const id = result.rows[0].id
  }).then(() => {
    return db.query(
      "INSERT INTO users(teacher_id, role,password,email) VALUES($1,$2,$3,$4 ) ", [subjectId[0], subjectinfo[0], hashPass, subjectinfo[2]]
    )
  })
}
//we bass hashPass2 form the admin page bcript 
function addAdmin(data, hashPass) {
  console.log('hashPass2',hashPass);
  const personalData = [data.name, data.age, data.gender, data.email];
  const subjectinfo = [data.role, data.password, data.email]
  // "INSERT INTO class_student(student_id, class_id, grade) studentClass($1, $2, $3)",
  return db.query(
    "INSERT INTO admin(adminname, age, gender, email) VALUES($1, $2, $3, $4) RETURNING id",
    personalData
  ).then((result) => {
    let id = result.rows[0].id
    return db.query(
      "INSERT INTO users(admin_id, role,password,email) VALUES($1,$2,$3,$4 ) ", [id, subjectinfo[0], hashPass, subjectinfo[2]]
    )
  })
}


//#############################################end of functions from admin post to new users #############################################

function getStudents() {
  return db.query("SELECT * FROM students").then((result) => result.rows);
}

function getStudentClasses(id) {
  return db.query(`SELECT class_student.class_id, class.class FROM class_student 
  INNER JOIN class ON class.id = class_student.class_id 
  WHERE class_student.student_id = $1`, [id]).then((result) => result.rows);

}


function getAllPosts() {
  return db.query(`
  SELECT students.studentname, blog_posts.text_content
  FROM blog_posts LEFT JOIN students
  ON students.id = blog_posts.student_id
  ORDER BY students.id;
  `).then((result) => result.rows);
}


function fillGrades(data) {
  const values = [data.name, data.class, data.numberInput];
  return db.query(
    "INSERT INTO class_student(student_id, class_id, grade) VALUES($1, $2, $3)",
    values
  );
}

function fillpost(data) {
  const values = [data.txtName, data.txtMsg];
  return db.query(
    "INSERT INTO blog_posts(student_id, text_content) VALUES($1, $2)",
    values
  );
}









module.exports = {
  addStudent,
  getStudents,
  getAllPosts,
  fillGrades,
  fillpost,
  getStudentClasses,
  addTeacher,
  addAdmin
};