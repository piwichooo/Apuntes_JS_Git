****
**SET Y OBJETOS**
****

> set o conjuntos - set: un conjunto no ordenado de valores unicos o elementos unicos, osea que no se repite nigun valor, excepto los objetos porq lso objetos son diferentes aunque tengan el mismo valor

ejemplo 

``` js
const array = [1,2,3,4,5,6,1,2,5, "hola", { id: 5}, "hola"]

const miSet = new Set(array)

console.log(array)//[1,2,3,4,5,6,1,2,5, "hola", { id: 5}, "hola"]
console.log(miSet)// Set {1,2,3,4,5,6, 'hola', { id: 5}}

//para agregar - .add()
miSet.add(9)
console.log(miSet)//Set {1,2,3,4,5,6,'hola', { id: 5}, 9}
miSet.add(4)
console.log(miSet)//Set {1,2,3,4,5,6,'hola', { id: 5}, 9}

// para eliminar - .delete()
miSet.delete("hola")
console.log(miSet)//Set {1,2,3,4,5,6,{ id: 5}, 9}

//eliminar todos los valores del set .clear() 
miSet.clear()
console.log(miSet)//Set { }

//Para saber si existe algun elemento - .has()
console.log(miSet.has(40))//false

//para saber cuantos elementos tiene .size
console.log(miSet.size)// 8

//iteracion dentro de los valores .forEach

miSet.forEach( valor => {
    console.log(valor)//1,2,3,4,5,6, { id:5 }, 9
})

//volver a convertir el set en un array o convertirlo en un iterator

const it_miSet = miSet.values()
console.log(it_miSet)// { [Iterator] }

const ar_miSet = [ ...miSet ]
console.log(ar_miSet)//[1,2,3,4,5,6, { id:5 }, 9]
```

****
**Trabajando con Objetos**
****

``` js
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id) //4
console.log(obj["4-juegos"])// [1,2,3,4]

const prop = "isDeveloper"
console.log(obj[prop])//false

//como replicar el objeto
const obj2 = obj;
console.log(obj2); //todo

obj2.nombre = "Iñigo"
console.log(obj2.nombre)//iñigo
console.log(obj.nombre)//iñigo
//MODIFICA EL OBJETO REAL, PARA EVITAR ESO HAGAMOS ESTO
const obj3 = { ...obj }

console.log(obj.nombre)//iñigo
console.log(obj3.nombre)//iñigo

obj3.nombre = "Gorka"

console.log(obj.nombre)//iñigo
console.log(obj3.nombre)//gorka
//////////////////

// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => b.anyo - a.anyo)

console.log(listaPeliculas)//de mayor a menor los años

```

****
**Fechas**
****
``` js
// Trabajando con fechas
const fecha = new Date()

console.log(fecha)

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)

const fecha3 = new Date(-10000000000000) // Milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

/////// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))
```
