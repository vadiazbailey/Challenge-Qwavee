"use strict"

let buttons = document.querySelectorAll(".like");

buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        cambiar(button); 
    });
    }
);

function cambiar(button){
    button.classList.toggle("nolike");
}
