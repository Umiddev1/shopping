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