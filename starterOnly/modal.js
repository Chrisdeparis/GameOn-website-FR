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
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelector(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");


// launch modal 
modalBtn.onclick = () => {
  modalbg.style.display = "block";
}

//close modal event
closeBtn.onclick = () => {
  console.log('clic')
  modalbg.style.display = "none";
}




//submit form
// submitBtn.forEach((btn) => btn.addEventListener("click", validate));
console.log(submitBtn);

const form = document.querySelector('#form');
console.log(form);
const formValidation = document.querySelector('#formValidation');

form.onsubmit = () => {
  const firstName = document.querySelector("#first").value;
  const lastName = document.querySelector("#last").value;
  const email = document.querySelector("#email").value;
  const birthdate = document.querySelector("#birthdate").value;
  const numberParticipation = document.querySelector("#quantity").value;
  const newYork = document.querySelector("#location1");
  const sanFrancisco = document.querySelector("#location2");
  const seattle = document.querySelector("#location3");
  const chicago = document.querySelector("#location4");
  const boston = document.querySelector("#location5");
  const portland = document.querySelector("#location6");

  const conditions = document.querySelector("#checkbox1").value;
  const conditionsChecked = document.querySelector('#checkbox1').checked;

  const inputFirst = document.querySelector("#first");
  const inputLast = document.querySelector("#last");
  const inputEmail = document.querySelector("#email");
  const inputBirthdate = document.querySelector("#birthdate");
  

  const invalidFirst = document.querySelector(".invalid-first");
  const invalidLast = document.querySelector(".invalid-last");
  const invalidEmail = document.querySelector(".invalid-email");
  const invalidBirthdate = document.querySelector(".invalid-birthdate");
  const invalidOption = document.querySelector('.invalid-option');
  const invalidCondition = document.querySelector('.invalid-condition');
  const validatedForm = document.querySelector('.validated-form');


  const checkFirst = document.querySelector(".valid-checkFirst");
  const checkLast = document.querySelector("#checkLast");
  const checkEmail = document.querySelector("#checkEmail");
  const checkBirthdate = document.querySelector('#checkBirthdate');
  const checkOption = document.querySelector('#checkOption');

  //regular expression for email
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


  if(firstName == '' || firstName.length < 2) {
    inputFirst.classList.add("form-invalid");
    invalidFirst.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";    
  } else {
    inputFirst.classList.remove("form-invalid");
    invalidFirst.innerHTML = "";
    inputFirst.classList.add("form-valid");
    checkFirst.classList.add("show-last");
  }
  if(lastName == "" || lastName.length < 2) {
    inputLast.classList.add("form-invalid");
    invalidLast.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    inputLast.classList.remove("form-invalid");
    invalidLast.innerHTML = "";
    inputLast.classList.add("form-valid");
    checkLast.classList.add("show-last");
  }
  if(String(email).match(emailReg) == null) {
    inputEmail.classList.add("form-invalid");
    invalidEmail.innerHTML = "votre email n'est pas valide";
  } else {
    inputEmail.classList.remove("form-invalid");
    inputEmail.classList.add("form-valid");
    checkEmail.classList.add("show-last");
    invalidEmail.innerHTML = "";
  }
  if(birthdate == ""){
    inputBirthdate.classList.add("form-invalid");
    invalidBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
  } else {
    inputBirthdate.classList.remove("form-invalid");
    inputBirthdate.classList.add("form-valid");
    invalidBirthdate.innerHTML = "";
  }
  
  if(newYork.checked == false && sanFrancisco.checked == false && seattle.checked == false && chicago.checked == false && boston.checked == false && portland.checked == false) {
    invalidOption.innerHTML = "Vous devez choisir une option.";
  } else {
    invalidOption.innerHTML = "";
  }
  //The general conditions box is checked, the other box is optional / can be left unchecked.
 
  if (firstName.length >= 2 && lastName.length >= 2 && String(email).match(emailReg) == true && birthdate !== '' && location1.checked == true && location2.checked == true && location3.checked == true && location4.checked == true && location5.checked == true && location6.checked == true && conditionsChecked == true) {
    invalidCondition.innerHTML = '';
    
    validatedForm.innerHTML ='Merci ! Votre réservation a été reçue.';
    return true;
      
  } 
  if(conditionsChecked == false){
    invalidCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    invalidCondition.innerHTML ="";
  }
  return false;
  
  
}
const conditions = document.querySelector("#checkbox1").value;
const conditionsChecked = document.querySelector('#checkbox1').checked;
console.log(location1.checked);

// when form is submitted

// function validate() {
  

//   //Conditions
  
//   //The First Name field has a minimum of 2 characters / is not empty.
//   if (firstName !== "" && firstName.length >= 2) {
    
//     //the last name field has a minimum of 2 characters / is not empty.
//     if (lastName !== "" && lastName.length >= 2) {
      
//       inputLast.classList.add("form-valid");
//       checkLast.classList.add("show-last");
//       invalidLast.innerHTML = "";
//       //The email address is valid.
//       if (email.match(emailReg)) {
//         inputEmail.classList.remove("form-invalid");
//         inputEmail.classList.add("form-valid");
//         checkEmail.classList.add("show-last");
//         invalidEmail.innerHTML = "";
//         // birthdate not empty
//         if (birthdate !== "") {
//           inputBirthdate.classList.remove("form-invalid");
//           inputBirthdate.classList.add("form-valid");
//           invalidBirthdate.innerHTML = "";
//           //For the number of contests, a numerical value is entered.
//           if (numberParticipation !== "" || numberParticipation == 0) {
//             //A radio button is selected.
//             if (
//               newYork.checked ||
//               sanFrancisco.checked ||
//               seattle.checked ||
//               chicago.checked ||
//               boston.checked ||
//               portland.checked
//             ) {
//               invalidOption.innerHTML ='';
//               //The general conditions box is checked, the other box is optional / can be left unchecked.
//               if (conditions == 'on' && conditionsChecked == true) {
//                 invalidCondition.innerHTML = '';
                
//                 validatedForm.innerHTML ='Merci ! Votre réservation a été reçue.';
//                 setTimeout(function(){
//                   console.log("Hello World");
//               }, 10000);
//                 return true;
//               } else {
//                 invalidCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
//                 return false;
//               }

//             } else {
//               invalidOption.innerHTML = "Vous devez choisir une option.";
//               return false;
//             }
//           }
//         } else {
//           inputBirthdate.classList.remove("form-valid");
//           inputBirthdate.classList.add("form-invalid");
//           checkBirthdate.classList.remove("show-last");
//           invalidBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
//           return false;
//         }
//       } else {
//         inputEmail.classList.remove("form-valid");
//         inputEmail.classList.add("form-invalid");
//         checkEmail.classList.remove("show-last");
//         invalidEmail.innerHTML = "votre email n'est pas valide";
//         return false;
//       }
//     } else {
//       inputLast.classList.remove("form-valid");
//       inputLast.classList.add("form-invalid");
//       checkLast.classList.remove("show-last");
//       invalidLast.innerHTML =
//         "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
//       return false;
//     }
//   } else {
//     inputFirst.classList.remove("form-valid");
//     inputFirst.classList.add("form-invalid");
//     checkFirst.classList.remove("show-first");
//     invalidFirst.innerHTML =
//       "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
//     return false;
//   }
// }
