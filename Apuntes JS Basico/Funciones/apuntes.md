****
**Funciones**
****
son bloques de codigo que se ejecutan con un fin especifico


- en caso de declarar la misma variable dentro de la funcion, no modifica al original
``` js
let nombre_2 = "Juan"
console.log(nombre_2) //juan

despedir(nombre_2)
console.log(nombre_2)//juan

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`) //diego
}
```

- En caso de un objeto, si modifica al original

``` js
let persona = { nombre: "Juan", apellido: "González" }
console.log(persona) // { nombre: "Juan", apellido: "González" }

saludarPersona(persona)

console.log(persona) // { nombre: "Juan", apellido: "Villar" }

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) //hola juan villar
}

```

- parametros por defecto

``` js
function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)//7
}

imprimeNumero()//por defecto siempre sera 7
```

- con arrays


``` js
function imprimir(...parametros) {
    console.log(parametros)// [1, 3, 9, 2, "hola", { id: 9 } ]
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })
```

- Suma de numeros de un array
se usa un return si quiere que la funcion retorne algo

``` js
function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)//50
```

- multiplicar

``` js
function multiplicar(a = 0, b = 0) {

    return a * b
}


console.log(multiplicar(4, 9))//36
```

****
**Funciones tipo flecha - funciones anónimas**


``` js
const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)

console.log(array2)

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)

console.log(array3)

function doble(valor) {
    return valor * 2
}

```
****
****

- carga y sobre carga

**carga**

``` js
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()
```

**sobrecarga**

```js
function recursivo() {
     recursivo()
 }

 recursivo()
```
****
****


**Funciones asincronas y promesas**

Las promesas son objetos que representan el resultado de una operación asíncrona. Una promesa puede encontrarse en uno de tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected). Una vez que una promesa se ha cumplido o rechazado, su estado ya no puede ser modificado.


```js
function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {// promesa 
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {//si es verdadero, se ejecuta
        resolve()
    } else { //si el if es falso, el reject se ejecuta
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta")) //se ejecuta si el if es correcto, osea el resolve
    .catch(() => console.log("ERROR"))//se ejecuta si el if es falso, osea el reject
    .finally(() => console.log("Yo me ejecuto siempre"))//siempre se ejecuta
```

**Funciones generadoras**

Las funciones generadoras son un tipo especial de función en JavaScript que puede ser utilizada para generar una secuencia de valores a medida que son solicitados. Estas funciones se diferencian de las funciones regulares en que utilizan la palabra clave "yield" en lugar de "return" para devolver un valor y pueden ser utilizadas en contextos en los que se espera un iterador.

Para definir una función generadora, se utiliza la palabra clave "function*" en lugar de "function"

``` js
function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)//1
console.log(gen.next().value)//2
console.log(gen.next().value)//3
console.log(gen.next().value)//4
console.log(gen.next().value)//5
console.log(gen.next().value)//6
console.log(gen.next().value)//7
console.log(gen.next().value)//8
console.log(gen.next().value)//9
console.log(gen.next().value)//10
```

otro ejemplo 

``` js
function* miGenerador() {
  yield 1;
  yield 2;
  yield 3;
}

const iterador = miGenerador();
console.log(iterador.next().value); // imprime 1
console.log(iterador.next().value); // imprime 2
console.log(iterador.next().value); // imprime 3
```

