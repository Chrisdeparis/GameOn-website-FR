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
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close the modal form
function closeModal() {
  // if click outside the modal-body
  document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".bground")) {
      modalbg.style.display = "none";
    }
  });
  // if pressing esc key
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape" && document.querySelector(".bground")) {
      modalbg.style.display = "none";
    }
  });
  return (modalbg.style.display = "none");
}

//submit form
submitBtn.forEach((btn) => btn.addEventListener("click", validate));

// when form is submitted
function validate() {
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

  const conditions = document.querySelector("#checkbox1");
  const nextevents = document.querySelector("#checkbox2");

  const inputFirst = document.querySelector("#first");
  const inputLast = document.querySelector("#last");
  const inputEmail = document.querySelector("#email");
  const inputBirthdate = document.querySelector("#birthdate");
  const inputOption = document.querySelector('#option')

  const invalidFirst = document.querySelector(".invalid-first");
  const invalidLast = document.querySelector(".invalid-last");
  const invalidEmail = document.querySelector(".invalid-email");
  const invalidBirthdate = document.querySelector(".invalid-birthdate");
  const invalidOption = document.querySelector('.invalid-option');
  const invalidCondition = document.querySelector('.invalid-condition')


  const checkFirst = document.querySelector(".valid-checkFirst");
  const checkLast = document.querySelector("#checkLast");
  const checkEmail = document.querySelector("#checkEmail");
  const checkBirthdate = document.querySelector('#checkBirthdate');
  const checkOption = document.querySelector('#checkOption');

  //regular expression for email
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //Conditions
  
  //The First Name field has a minimum of 2 characters / is not empty.
  if (firstName !== "" && firstName.length >= 2) {
    inputFirst.classList.remove("form-invalid");
    inputFirst.classList.add("form-valid");
    checkFirst.classList.add("show-first");
    invalidFirst.innerHTML = "";
    //the last name field has a minimum of 2 characters / is not empty.
    if (lastName !== "" && lastName.length >= 2) {
      inputLast.classList.remove("form-invalid");
      inputLast.classList.add("form-valid");
      checkLast.classList.add("show-last");
      invalidLast.innerHTML = "";
      //The email address is valid.
      if (email.match(emailReg)) {
        inputEmail.classList.remove("form-invalid");
        inputEmail.classList.add("form-valid");
        checkEmail.classList.add("show-last");
        invalidEmail.innerHTML = "";
        // birthdate ne doit pas etre vide
        if (birthdate !== "") {
          inputBirthdate.classList.remove("form-invalid");
          inputBirthdate.classList.add("form-valid");
          // checkBirthdate.classList.add("show-last");
          invalidBirthdate.innerHTML = "";
          //For the number of contests, a numerical value is entered.
          if (numberParticipation !== "" || numberParticipation == 0) {
            //A radio button is selected.
            if (
              newYork.checked ||
              sanFrancisco.checked ||
              seattle.checked ||
              chicago.checked ||
              boston.checked ||
              portland.checked
            ) {
              invalidOption.innerHTML ='';


              //The general conditions box is checked, the other box is optional / can be left unchecked.
              console.log(conditions);
              if (conditions == true ) {
                console.log("formulaire valide");
                alert("Merci ! Votre réservation a été reçue.");

                return true;
              } else {
                invalidCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
                // alert(
                //   "Vous devez vérifier que vous acceptez les termes et conditions."
                // );
                return false;
              }

            } else {

              
              invalidOption.innerHTML = "Vous devez choisir une option.";
              // alert("Vous devez choisir une option.");
              return false;
            }
          }
        } else {
          inputBirthdate.classList.remove("form-valid");
          inputBirthdate.classList.add("form-invalid");
          checkBirthdate.classList.remove("show-last");
          invalidBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
          // alert("Vous devez entrer votre date de naissance.");
          return false;
        }
      } else {
        inputEmail.classList.remove("form-valid");
        inputEmail.classList.add("form-invalid");
        checkEmail.classList.remove("show-last");
        invalidEmail.innerHTML = "votre email n'est pas valide";
        // alert("votre email n'est pas valide");
        return false;
      }
    } else {
      inputLast.classList.remove("form-valid");
      inputLast.classList.add("form-invalid");
      checkLast.classList.remove("show-last");
      invalidLast.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      // alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      return false;
    }
  } else {
    inputFirst.classList.remove("form-valid");
    inputFirst.classList.add("form-invalid");
    checkFirst.classList.remove("show-first");
    invalidFirst.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

    return false;
  }
}
