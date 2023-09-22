//show menu

const showMenu =(toggleId,navId)=>{
    const toggle= document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(toggle && nav){
      toggle.addEventListener('click',()=>{
        nav.classList.toggle('show')
      });
    }
}
showMenu('nav_toggle','nav_menu');


//active and remove active

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu' )
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))




  
function sendEmail(){
  
  let name =  document.getElementById("name").value ;
  let email =  document.getElementById("email").value ;
  let mobile = document.getElementById("mobile").value ;
  let message = document.getElementById("message").value;
let body =  "Name: " + name + "<br/> Email: " + email + "<br/> Phone No : " + mobile + "<br/> Message : " +  message ;

  Email.send({
    
    SecureToken : "311ebcd9-5b3d-4ab0-8525-017521231601",
    To : "karthick18696@gmail.com",
     From : "karthick18696@gmail.com",
    Subject : "This message from your Portfolio",
    Body : body
  }).then(
  message => alert(message)
  );
}