// Smooth scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(email === "" || message === "") {
        alert("Please fill all fields");
    } else {
        alert("Message sent!");
    }
});