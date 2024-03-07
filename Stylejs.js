
//Go to desired div
function scrollToDiv(className) {
  const section = document.querySelector('.' + className)

  if (section) {
      // Scroll smoothly to the section
      section.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}

//Exit buttons
function closeWindow(){
  window.close();
}

//Testing Contact me
function validateForm() {
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var message = document.getElementById("textarea").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "" || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (firstName.trim() === "") {
        alert("Please enter your first name.");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Please enter your last name.");
        return false;
    }

    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    alert("Thank. I will get back to you");
    return true;
}
