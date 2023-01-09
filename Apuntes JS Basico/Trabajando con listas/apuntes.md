****
**Listas**
****

> listas

``` js
//ejemplo de lista
let var1 = { id:false }
let array = [1, "hola", false, {id : 5}, null, undefined, var1]
```

> acceder a los paloves de un array a traves de su posicion

- array[indice]

``` js
let array = [1, "hola", false, {id : 5}, null, undefined]
console.log(array[0]); // 1
console.log(array[1]); // hola
```

> metodos para introducir nuevos valores al array - .push() .unshift()

- .push() -> agrega valores al final

``` js
let array = [1, "hola", false, {id : 5}, null, undefined]
array.push("final",24,2)
console.log(array) //1, "hola", false, {id : 5}, null, undefined,"final",24,2 
```

- .unshift() -> agrega valores al inicio

``` js
let array = [1, "hola", false, {id : 5}, null, undefined]
array.unshift("inicio",24,2)
console.log(array) //"inicio",24,2,1, "hola", false, {id : 5}, null, undefined
```

> Metodos para eliminar valores en nuestros array - .pop() .shift()

- pop() -> elimina el valor del final

``` js
const array2 = [1,2,"hola", false]
array2.pop()
console.log(array2)//[1,3,"hola"]
```

- shift() -> elimina el valor del inicio

``` js

const array2 = [1,2,"hola", false]
array2.shift()
console.log(array2)//[3,"hola"]

```

> Metodo para eliminar, modificar o añadir valores en nuestro array

- .splice( x, y ,z)

``` js
const array3 = [1,2,3,4,5,6]
//eliminar valores .splice(indice, numValoresEliminar)
array3.splice(2,1);
console.log(array3)[1,2,4,5,6]
//añadir valores .splice(indice, 0, valores)
array3.splice(2, 0 , "hola")
console.log(array3)// [1,2, "hola", 4, 5, 6]
//mdificar valores .spice(indice, 1, valores)
array3.splice(2, 1 ,3)
console.log(arrray3)// [1,2,3,4,5,6]
```

> como unir dos listas 

- .concat()

``` js
const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2))// ["hola", 2, false, null, "adios", 8, true, undefined ]
console.log(lista1) //["hola", 2, false, null]

//el concat no modifica, para modificar la lista debes hacer lo siguiente
const lista3 = lista1.concat(lista2)
console.log(lista3)//["hola", 2, false, null, "adios", 8, true, undefined ]
```

> como unir dos listas con el factor de propagacion

``` js
console.log(...lista3) //hola 2 false null adios 8 true undefined

const lista4 = [...lista1, ...lista2]
console.log(lista4)// ["hola", 2, false, null, "adios", 8, true, undefined ]

//NO HACER ESTO-ERROR
const lista5 = [lista1, lista2]
console.log(lista5) [["hola", 2, false, null], ["adios", 8, true, undefined]]

```

> como obtener una lista a partir de otra - .slice()

``` js
const array = ["hola", 1, 2, 3, true, null, "adios"]
//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1,4))//[1,2,3]
const array2 = array.slice(2,5)
console.log(array2)//[2,3,true]

const array3 = array.slice(2, -2)
console.log(array3)// [2,3,true]
```


> Iterar los valores de una lista - Forma moderna

``` js
const array = ["hola", 2, 5, 90, false, undefined]

//forma antigua ( poco eficiente)
for (let i = 0; i < array.length; i++){
    console.log(array[i]) // "hola", 2, 5, 90, false, undefined
}

//Forma ES6 (mas eficiente) .forEach()
array.forEach(valor => {
    console.log(valor)// "hola", 2, 5, 90, false, undefined
})

//si queremos sumar todos
let suma = 0;
const arrayNums = [3, 6 ,2 ,77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
        suma += valor;
        console.log(valor)// 3, 6 ,2 ,77, 2, 3, 93, 19
})
console.log(suma)//205
```

> Busqueda de un valor dentro de una lista .find()

``` js
//busquemos el elemento 93
const variable = array.find(valor => {
    if (valor === 90){
        return true
    }
})
console.log(variable);
//Con objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 3},
    { nombre: "Amaia", edad: 29}
]

const objeto = listaObjetos.find(o => {
        if (o.nombre === "Miguel"){
            return true
        }
})
console.log(objeto)// { nombre: "miguel", edad: 28}
console.log(objeto.edad)// 28

```

- la forma mas eficiente para encontrar un objeto

``` js
const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad)//28

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad)//28
```

****
**Metodos avanzados- .map(), .filter(), .reduce()**
****

> map() - Colocar algun valor en cada uno de los elementos del array

``` js
const array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const newArray = array.map((valor, indice) => {
    // return "1-${valor}" esto solo agregara 1 a cada elemento
    // queremos que aumente progresivamente
    return "${indice + 1} - ${valor}"
})
console.log(newArrawy)//["1-San sebastian", "2-Madrid", "3-Barcelona", "4-Alicante", "5-Bilbao"]
//lo mismo pero mas chico
const newArray = array.map((valor, indice) => "${indice + 1} - ${valor}")

```

> filter() - filtra los valores que deseamos

``` js
const listaObjetos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 3},
    { nombre: "Amaia", edad: 29}
]

//forma mala
const personasMayores = listaObjetos.filter( obj => {
    if ( obj.edad>30){
        retrun true
    } else {
        return false
    }
})

// LA MEJOR FORMA

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)// nos dara todas las personas mayores a 30

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel" )
console.log(nuevalista)// nos da todos los objetos que no sea miguel

```

> .reduce() - acepta 4 parametros, obligatrio son 2 ( valor inicial, current, indice, arrayoriginal)- el objetido del reduce es que el valor inical sea un valor acumulativo

![](https://media.discordapp.net/attachments/1054887102908735519/1057535158795898942/image.png)

si quiero sumar progresivamente

![](https://media.discordapp.net/attachments/1054887102908735519/1057535477491708004/image.png)


> sort() -> modifica el array

-tiene 2 parametros ( a,b) a= representa el elemento del array, b el siguiente elemento

``` js
//para ordenar de mayor a menos
const array = [2,5,9,15,1,2,0,4]
//ordenas de mayor a menos
array.sort((a,b) => {
    if(a< b){
        return +1122 //cualquier numero vale
    } else if ( a > b){
        return -15231
    } else { // a === b
        return 0
    }
})
console.log(array)//[15,9,5,4,2,2,1,0]

//otra forma
const arrayNumero = [4,1,7,3,1,3,56,1,546]

arrayNumerico.sort((a,b) => b - a)
console.log(arrayNumerico)//[546,56,7,4,3,3,1,1,1]
```

- con objetos

``` js
const listaObjetos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 28},
    { nombre: "Lucia", edad: 3},
    { nombre: "Amaia", edad: 29}
]

listaObjetos.sort((a,b) => {
    if ( a.edad < b.edad){
        return -1
    }else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
})
//otra forma
listaObjetos.sort((a,b => a.edad - b.edad)

)

```

> every() - si todos los componentes cumplen uan condicion- comparand listas

ejemplo de si los valores del array son mayores a 0

``` js
const array = [4,6,7,8,3,6,2,1,-4,-7,12,5,-40]

//primer metodo
const resultado = array.every(valor => {
    if (valor > 0){
        return true
    }else {
        return false
    }
})
//otro metodo mas corto
const resultado = array.every(valor => valor > 0)
console.log(resultado)//false
```

ejemplo de comparando listas

``` js
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

console.log(ar1 === ar2)//false- esto no es correcto, lo haremos de la siguiente manera

//---------------------
const compararArray = (array_1, array_2) => {
    if ( array_1.length !== array_2.length)return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(comparandoArrays(ar1, ar2))//true

const ar3 = [1,2,3,9]

console.log(compararArrays(ar1, ar3))//false
```

> .some() - El método .some() es una función de los arrays en JavaScript que evalúa si al menos un elemento del array cumple con la condición especificada en una función de devolución de llamada proporcionada. Este método devuelve true si al menos un elemento del array cumple con la condición y false si ningún elemento del array cumple con la condición.

``` js
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < -0)

console.log(res) //true

const existe = array.some(valor => valor === 9)

console.log(existe) //true

```
con objetos

``` js
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")

console.log(existeJuan) //false

```

> Cómo obtener una lista a partir de un objeto iterable

Para obtener una lista a partir de un objeto iterable en JavaScript, puedes utilizar el método Array.from(). Este método crea un nuevo array a partir de un objeto iterable, como una cadena, una lista de nodos del DOM, o una instancia de un objeto Map o Set.

``` js
const str = "Hola soy Gorka"
console.log(str[5]) //s

const ar_str = Array.from(str)
console.log(ar_str) // [ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'G', 'o', 'r', 'k', 'a' ]

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set) //[2,3,"hola",4]

const keys = array.keys()
console.log(keys)// { [Iterator]}

const ar_keys = Array.from(keys)
console.log(ar_keys)// [0,1,2,3,4,5,6,7,8,9,10]
```