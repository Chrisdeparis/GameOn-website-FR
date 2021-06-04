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
  modalbg.style.display = "none";
}

