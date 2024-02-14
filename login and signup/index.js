let body = document.querySelector("body");
let signup = document.getElementById("signup-btn");
let signin = document.getElementById("signin-btn")
let register = document.querySelector("#register")


signup.addEventListener("click" , ()=>{

    body.classList.add("slide");
    signin.style.background = "#691A40";
    register.style.background = "#691A40";
})

signin.addEventListener("click" , ()=>{

    body.classList.remove("slide");
})