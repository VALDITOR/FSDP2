let pantalla = document.getElementById("screen");
let verde = document.getElementById("verde");


// Función volver a la primera imagen

document.addEventListener("click", (e)=>{
    
    if(e.target.id === 'reset'){
        pantalla.style.backgroundImage = "url('img/verde.jpg')";
    }
});

// Función apagar y encender pantalla

document.addEventListener("click", (e)=>{
    
    switch(e.target.id === 'onOff'){
        case (pantalla.style.opacity == 0):
            return pantalla.style.opacity = 1;
        
        default:
            return pantalla.style.opacity = 0;
        
    }
});

// Función apagar y encender luz lateral

document.addEventListener("click", (e)=>{
    
    switch(e.target.id === 'onOff'){
        case (verde.style.backgroundColor == "green"):
            return verde.style.backgroundColor = "gray";
        
        default:
            return verde.style.backgroundColor = "green";
        
    }
});