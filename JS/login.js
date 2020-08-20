$(function(){
    $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    });
 });

$(function(){
    $('#registr-trigger').click(function(){
    $(this).next('#registr-content').slideToggle();
    $(this).toggleClass('active');          
    });
 });



 function registerUser() {
    var email = document.getElementById("regUser");
    var pass = document.getElementById("regPass");
    localStorage.setItem("user",email.value);
    localStorage.setItem("pass",pass.value);
   
   console.log(localStorage)
 }

 function loginUser() {
    var storedName = localStorage.getItem('user');
    var storedPw = localStorage.getItem('pass');

    var userName = document.getElementById('logUser');
    var userPw = document.getElementById('logPass');

   
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('Usuario o contraseña incorrectos');
    }else {
        alert('Usuario correcto');
        document.getElementById("userSpace").innerHTML = localStorage.getItem("user");
    }
}