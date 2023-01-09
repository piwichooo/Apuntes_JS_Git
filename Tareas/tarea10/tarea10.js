function verdadero(){
    return true;
}

//////////////
// async function saludarDespuesDeCincoSegundos() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log('Hola soy una promesa');
//         resolve();
//       }, 5000);
//     });
//   }
  
//   saludarDespuesDeCincoSegundos();
// saludarDespuesDeCincoSegundos()
//   .then(() => {
//     // se ejecuta cuando la promesa se cumple
//     console.log('Promesa cumplida');
//   })
//   .catch(error => { console.log("error");})


////////////

function* generarIndicesPares() {
    let indice = 0;
    while (true) {
      yield indice;
      indice += 2;
    }
  }

const par = generarIndicesPares();

console.log(par.next().value);
console.log(par.next().value);
