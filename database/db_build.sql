BEGIN;

  DROP TABLE IF EXISTS students, blog_posts,class, class_student, teacher, admin,users
  CASCADE;

CREATE TABLE students
(
  id SERIAL PRIMARY KEY,
  studentname VARCHAR(255) NOT NULL,
  age INTEGER,
  gender VARCHAR(40),
  location VARCHAR(255),
  email VARCHAR(50) NOT NULL,
  UNIQUE(email)
);

CREATE TABLE admin
(
  id SERIAL PRIMARY KEY,
  adminname VARCHAR(255) NOT NULL,
  age INTEGER,
  gender VARCHAR(40),
  location VARCHAR(255),
  email VARCHAR(50) NOT NULL,
  UNIQUE(email)
);

CREATE TABLE teacher
(
  id SERIAL PRIMARY KEY,
  teachername VARCHAR(255) NOT NULL,
  age INTEGER,
  gender VARCHAR(40),
  location VARCHAR(255),
  email VARCHAR(50) NOT NULL,
  UNIQUE(email)
);

CREATE TABLE blog_posts
(
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  text_content TEXT
);

CREATE TABLE class
(
  id SERIAL PRIMARY KEY,
  class VARCHAR(20) NOT NULL
);

CREATE TABLE class_student
(
  class_id INTEGER REFERENCES class(id),
  student_id INTEGER REFERENCES students(id),
  grade INTEGER
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  admin_id INTEGER REFERENCES admin(id),
  teacher_id INTEGER REFERENCES teacher(id),
  email VARCHAR(50) NOT NULL,
  role VARCHAR(50) NOT NULL,
  password VARCHAR(250) NOT NULL
);

INSERT INTO admin
  (adminname, age, location, gender,email)
VALUES
  ('mario',22 , 'Sunipol, UK', 'm', 'mario@g.com')
;

INSERT INTO teacher
  (teachername, age, location, gender,email)
VALUES
  ('hadi', 35, 'Sunipol, UK', 'm', 'hadi@g.com')
;

INSERT INTO students
  (studentname, age, location, gender,email)
VALUES
  ('kim', 1, 'Sunipol, UK', 'f', 'kimk@g.com')
;


INSERT INTO users
  ( admin_id, email, role, password)
VALUES
  (1, 'mario@g.com', 'admin', 123);


INSERT INTO users
  ( student_id, email, role, password)
VALUES
  (1, 'kimk@g.com', 'student', 123);

  
INSERT INTO users
  ( teacher_id, email, role, password)
VALUES
  (1, 'hadi@g.com', 'admin', 123 )
;




INSERT INTO blog_posts
  (text_content, student_id)
VALUES
  ('Announcing of invitation principles in.', 1)
;

INSERT INTO class
  ( id, class)
VALUES
  (1, 'arabic'),
  (2, 'english'),
  (3, 'math'),
  (4, 'hebrow'),
  (5, 'art')
;

COMMIT;
