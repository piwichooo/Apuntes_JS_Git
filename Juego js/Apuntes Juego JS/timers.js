//timers

//setinterval cada cierto tiempo ejecuta una funcion, haga algo

let intervalo=setInterval(()=>{
    console.log("hola");

},1000)



//setTimeout-> tiempo fuera, hasta que no pase tanto tiempo no se ejecuta algo

setTimeout(()=>{
    clearInterval(intervalo)//clear sirve para parar una ejecucion
},10000)

//la forma mas moderna de crear un bucle en un juego js


//REQUESTaNIMATIONfRAME -> Sirve para animar cada frame - lo mismo que setinterval

function principal(){
    requestAnimationFrame(principal)//nos permite en cuestion de rendimiento mejor el bucle que el de Setintervale
    console.log("hola");
}
principal()

