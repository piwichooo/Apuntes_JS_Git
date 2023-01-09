const datos = {
    nombre: "john",
    apellido: "monteagudo",
    edad: 22,
    altura: 1.72,
    eresDesarrollador: false
}

var edadP = datos.edad;
console.log(edadP);

const lista = Object.entries(datos);
console.log(lista);

//listadeamigos

const ListadeAmigos = [
    {
        nombre: "alberto",
        apellido: "morris",
        edad: 22,
        altura: 1.65,
        eresDesarrollador: false 
    },
    {
        nombre: "cristhian ",
        apellido: "regalado",
        edad: 23,
        altura: 1.70,
        eresDesarrollador: false
    }
]

var hola = ListadeAmigos.sort((a,b) => b.edad - a.edad)

console.log(hola);

//otro 
const listaOrdenada = [...ListadeAmigos].sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);