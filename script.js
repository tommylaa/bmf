const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
}

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Test enquiry submitted successfully. This is only a local test and has not been emailed anywhere.");
    form.reset();
  });
});