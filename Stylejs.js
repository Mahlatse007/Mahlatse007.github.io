
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


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);
    var object = {};

    formData.forEach(function(value, key){
        object[key] = value;
    });

    var json = JSON.stringify(object);

    console.log(json);
});

fetch('mahlatsemakgati72@gmail.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: json,
})
.then((response) => response.json())
.then((data) => console.log('Email sent: ', data))
.catch((error) => console.error('Error:', error));
