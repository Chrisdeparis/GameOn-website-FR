function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll('.close');
const submitBtn = document.querySelectorAll('.btn-submit');






// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));



// close the modal form
function closeModal() {
  // if click outside the modal-body
  document.addEventListener("click", e => {
    if (e.target == document.querySelector(".bground")) {
      modalbg.style.display = "none";
    }
  });
  // if pressing esc key
  document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".bground")) {
      modalbg.style.display = "none";
    }
  });
  return modalbg.style.display = "none";
}

//submit form
submitBtn.forEach((btn) => btn.addEventListener('click', validate));

// when form is submitted
function validate() {
const firstName = document.querySelector('#first').value;
const lastName = document.querySelector('#last').value;
const email = document.querySelector('#email').value;
const birthdate = document.querySelector('#birthdate').value;
const numberParticipation = document.querySelector('#quantity').value;
const newYork = document.querySelector('#location1').value;
const sanFrancisco = document.querySelector("#location2").value;
const seattle =  document.querySelector('#location3').value;
const chicago = document.querySelector('#location4').value;
const boston = document.querySelector('#location5').value;
const portland = document.querySelector('#location6').value;
const conditions = document.querySelector('#checkbox1').value;
const nextevents = document.querySelector("#checkbox2").value;

//regular expression for email
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Conditions
// console.log(newYork);
  //The First Name field has a minimum of 2 characters / is not empty.
  if(firstName !== '' && firstName.length >=2) {
    //the last name field has a minimum of 2 characters / is not empty.
    if(lastName !== '' && lastName.length >=2) {
      
      if(email.match(emailReg)) {
        if(numberParticipation !== '') {
          if(
              newYork.checked || 
              sanFrancisco.checked ||
              seattle.checked ||
              chicago.checked ||
              boston.checked ||
              portland.checked ||
            ) {
            console.log('check')
          }
        }
      }
    }
  }
}

