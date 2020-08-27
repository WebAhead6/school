const a =
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
  <link rel="stylesheet" type="text/css" media="screen" href="public/style.css" />
  <title>SmartSchool</title>
</head>
<body>
  <div class="container">
     <header class="header">
       <div class="header-primary-menu-box">
         <div class="header--top-bar">
           
         <img src="https://avatars2.githubusercontent.com/u/57487623?s=400&u=ea14e01321fbbbe42a3209ba47cb5c1a7af7bfb0&v=4?w=360&amp;h=360&amp;crop=1" class="super--admin" alt="super--admin">
           <div class="logo-box">
             <img src="https://img.freepik.com/free-icon/students-cap_318-62709.jpg?size=338c&amp;ext=jpg" alt="Logo balck" class= "logo">
           </div>

         </div>

     </div>

       <div class="heading--box-text">
         <div class="heading-primary">
           <span class="heading-primary-main">Hadi SCHOOL</span>
           <span class="heading-primary-sub">ensa7 ya habibi</span>

           </div>
       </div>


      
   
`
const school =
  `
<div class="school">
<div class="school_wall">

</div>
</div>
`


const student = `<div class="student">
<br />
<br />
<br />
<form method="post" action="/studentPost">
<div class="">
    <div class="">
      <div class="">
      <select name="txtName" id="searched" value="" ></select>
      </div>

      <div class="">
        <div class="">
          <textarea name="txtMsg" class="" placeholder="Your Message *"
            style="width: 100%; height: 150px;"></textarea>
        </div>
      </div>
      <div class="">
        <input type="submit" name="btnSubmit" class="btnContact" value="post to wall" />
      </div>
    </div>

  </div>
</form>
</div>
`

const teacher = `
<div class="teacher">
<div class="teacher-form">
<form action="/fill" method="POST">
<fieldset>
      <legend>Input student grades</legend>
      <br/>
      <br/>
      <br/>
      <br/>
 

    <label>Name: <input type='text' id = 'name' name = 'name'></label>
         
   <br/>
   class
   <br/>
    <label><input type="radio" name="class" value="1" >arabic</label>
    <label><input type="radio" name="class" value="2" >english</label>
    <label><input type="radio" name="class" value="3" >math</label>
    <label><input type="radio" name="class" value="4" >hebrow</label>
    <label><input type="radio" name="class" value="5">art</label>

    Checkboxes<br/>
    
    <label>Number: <input type="number" name="numberInput" min="1" max="100"></label>

    <input type = 'submit' value = "submit">
</fieldset>
</form> 
</div>
`


const foter = `        </header>
<div class="header--admin-text-box">
  <a href="#" class="header-admin-primary-btn " onclick="headingText('.school')">school wall</a>
  <a href="#" class="header-admin-primary-btn " onclick="headingText('.student')">student login </a>
  <a href="#" class="header-admin-primary-btn " onclick="headingText('.teacher')">teacher login</a>
</div>`
const b = `
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
<script src="/public/index.js"></script>
</html>
`



module.exports = {
  a,
  b,
  teacher,
  foter,
  student,
  school
};