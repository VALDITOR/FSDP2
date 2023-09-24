let pantalla = document.getElementById("screen");
let verde = document.getElementById("verde");
let cont = 0;

// Funciones para cambiar de imagen hacia delante

document.addEventListener("click", (e)=>{
    
    if(e.target.id === 'right'){
        cont++;
    }
});

document.addEventListener("click", (e)=>{
if(cont === 1){
    pantalla.style.backgroundImage = "url('img/pkm.png')";
}
});

document.addEventListener("click", (e)=>{
    if(cont === 2){
        pantalla.style.backgroundImage = "url('img/ctv.png')";
    }
    });
    
document.addEventListener("click", (e)=>{
    if(cont === 3){
         cont = 0;
    }
    });
document.addEventListener("click", (e)=>{
    if(cont === 0){
        pantalla.style.backgroundImage = "url('img/gba.png')";
    }
    });

    // Funciones para cambiar de imagen hacia atras

document.addEventListener("click", (e)=>{
    
    if(e.target.id === 'left'){
        cont--;
    }
});

document.addEventListener("click", (e)=>{
if(cont === -1){
    pantalla.style.backgroundImage = "url('img/pkm.png')";
}
});

document.addEventListener("click", (e)=>{
    if(cont === -2){
        pantalla.style.backgroundImage = "url('img/ctv.png')";
    }
    });
    
document.addEventListener("click", (e)=>{
    if(cont === -3){
         cont = 0;
    }
    });

    document.addEventListener("click", (e)=>{
        if(cont === 0){
            pantalla.style.backgroundImage = "url('img/gba.png')";
        }
        });

// Función volver a la primera imagen

document.addEventListener("click", (e)=>{
    
    if(e.target.id === 'reset'){
        pantalla.style.backgroundImage = "url('img/gba.png')";
        cont = 0;
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