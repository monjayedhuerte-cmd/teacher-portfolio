const passwordInput=document.getElementById("password");

const toggle=document.getElementById("togglePassword");

const error=document.getElementById("error");

toggle.addEventListener("click",()=>{

if(passwordInput.type==="password"){

passwordInput.type="text";

toggle.innerHTML='<i class="fas fa-eye-slash"></i>';

}else{

passwordInput.type="password";

toggle.innerHTML='<i class="fas fa-eye"></i>';

}

});

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const password="Teacher2026";

if(passwordInput.value===password){

window.location.href="home.html";

}else{

error.textContent="Incorrect password.";

passwordInput.value="";

passwordInput.focus();

}

});