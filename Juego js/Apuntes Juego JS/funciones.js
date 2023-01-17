//funcion declarada te permite llamarla antes o despues de la funcion
pulsoTecla()
function pulsoTecla(){
    console.log("Estoy pulsando la tecla e");
}
pulsoTecla()

/*document.addEventListener('keydown',(e)=>{
    if(e.key==='e'){
    pulsoTecla()
    }
})*/


// funcion expresada, no permite llamarla antes, solo despues de la funcion
const saltar=function(){
    console.log("estoy saltando");
}

saltar()