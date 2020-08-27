let studentClasses = document.getElementById('selectedbyteacher')
const studentClassesList = document.getElementById('studentClasses')
studentClasses.addEventListener('change', (event) => {
    console.log(1);
    axios
                .get('/studentClasses/'+event.target.value)
                .then(res => {

                    while (studentClassesList.firstChild) {
                        studentClassesList.removeChild(studentClassesList.childNodes[0])
                    }

                    res.data.forEach(element => {
                       const option = document.createElement('option')
                       option.textContent = element.class
                       option.value = element.class_id
                       studentClassesList.appendChild(option)
                    });
                
                })
                .catch(err => console.log(err))
})


// function showOutput(res) {
//     suggestion.forEach(element => {

//     document.getElementById('studentClasses').innerHTML = `
     
          

     
//         let searchedFor = document.createElement('option');
//         searchedFor.id = 'searchedFor';
//         searchedFor.value= element.id;
//         document.body.appendChild(searchedFor);
//         document.getElementById('searched').appendChild(searchedFor);
//         searchedFor.className = 'searchedFor';
//         searchedFor.innerHTML = element.studentname;
    
   
//     `;
//     console.log(res.data);
//   }







// function headingText(clasname) {
//     let x = document.querySelector(".heading--box-text");
//     let a = document.querySelector(".school");
//     let b = document.querySelector(".student");
//     let c = document.querySelector(".teacher");
// ///////////////////next to fetch the wall page 
//     if (clasname === ".school") {
//         axios
//             .post('/wall')
//             .then(res => showOutput(res))
//             .catch(err => console.log(err))
//     }

// /////////////////////next to fech the students names
// if (clasname === ".student") {
//     axios
//         .get('/autoStudentsNames')
//         .then(res => shownames(res.data))
//         .catch(err => console.log(err))
// }

// /////////////////////////////toggel
// let y = document.querySelector(clasname);

// if (x.style.display === "none") {
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";

//     x.style.display = "block";
//     y.style.display = "none";

//     //this.classList.add("shadow");

// } else {
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";

//     x.style.display = "none";
//     y.style.display = "block";

// }
// }

// // show the things on the school wall
// function showOutput(res) {
//     document.querySelector('.school_wall').innerHTML = `
     
     
//         <div class="card-body">
//           <pre>${JSON.stringify(res.data, null, 2)}</pre>
//         </div>
    
   
//     `;
//     console.log(res.data);
//   }




//   function shownames(res) {
//        console.log("shownames,",res);
//     let suggestion = res;
//       ////////////////////////////////creat the serch result\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//       // reset the serch div 
//       while (searched.hasChildNodes()) {
//         searched.removeChild(searched.childNodes[0]);
//       }
    

      
//       suggestion.forEach(element => {

//         let searchedFor = document.createElement('option');
//         searchedFor.id = 'searchedFor';
//         searchedFor.value= element.id;
//         document.body.appendChild(searchedFor);
//         document.getElementById('searched').appendChild(searchedFor);
//         searchedFor.className = 'searchedFor';
//         searchedFor.innerHTML = element.studentname;



//       })

// }
