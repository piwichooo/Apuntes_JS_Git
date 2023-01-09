var lista = [atun, aceite, azucar, sal, tomates]
lista.unshift("Aceite de Girasol");
lista.shift();
console.log(lista);
const listaPeliculas = [
    { nombre: "Avatar1", director: "cameron", fecha: 2012},
    { nombre: "Avatar2", director: "cameron", fecha: 2022},
    { nombre: "Guerra mundial Z", director: "gaaa", fecha: 2014}
]

const PeliculasPost = listaPeliculas.filter(obj => obj.fecha > 2010)
console.log(PeliculasPost);

const DirectorArray = listaPeliculas.map((valor, indice) =>  (indice + 1)+ "-"+ valor.director )
console.log(DirectorArray );

const TitulosArray = listaPeliculas.map((valor, indice) => (indice + 1)+ "-"+ valor.nombre);
console.log(TitulosArray);

const UnirLista = DirectorArray.concat(TitulosArray)
console.log(UnirLista);

const Propagacion = [...DirectorArray, ...TitulosArray]
console.log(Propagacion);