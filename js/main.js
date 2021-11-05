let elInput = document.querySelector('.passw');
let elEyeBtn = document.querySelector('.moda__form-eye');
let n=0

elEyeBtn.addEventListener('click', ()=>{
  if(n==0){
    elInput.type = "text"
    n=1
    document.getElementById("eye").className = "bi bi-eye-fill";
  }
  else{
    elInput.type = "password"
    n=0
    document.getElementById("eye").className = "bi bi-eye-slash-fill";
  }
})


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
