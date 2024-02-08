
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
