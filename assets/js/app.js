particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });


const agreeCheckbox = document.getElementById("agree");
const submitBtn = document.getElementById("submit-btn");
agreeCheckbox.addEventListener("click", () => {
  if (agreeCheckbox.checked === true) {
    submitBtn.disabled = false; 
  }
  else {
    submitBtn.disabled = true; 
  }
});