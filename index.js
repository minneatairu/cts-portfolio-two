var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens/closes the modal
var infoBtn = document.querySelector(".top-right-text");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to toggle modal and button text
function toggleModal() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
        infoBtn.textContent = "INFO";
    } else {
        modal.style.display = "block";
        infoBtn.textContent = "CLOSE";
    }
}

// When the user clicks on the button, toggle the modal
infoBtn.onclick = function() {
    toggleModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    toggleModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        toggleModal();
    }
}
