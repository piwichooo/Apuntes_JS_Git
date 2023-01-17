//localstorage lo encuentras en el navegador- inspeccionar
let puntuacion=9




localStorage.setItem('puntuacion', puntuacion)    //es para guardar informacion

let puntuaciones=localStorage.getItem('puntuacion')// con getitem accedo a las puntuaciones

console.log(puntuaciones);