****
**Cadenas de caracteres**
****

> comillas -> "" o ''

``` js
//Poner comillas dentro de un string

let str_comillas = " El otro dia me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro dia me dia me dijo literalmente "ve a sacar la basura"'
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"

```

> Comillas invertidas(backticks)
nos permite introducir variables dentro de un string 
con alt + 96

``` js
let nombre = "Iñigo"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)// Hola, Iñigo bienvenido

```

> plantillas html con las comillas invertidas
las comillas invertidas tmb nos permite ingresar un html dentro de un string

``` js
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo </p>
</html>
`;

console.log(plantilla); // <html><h1>Pagina web de ${nombre}</h1><p>Este es un parrafo </p></html>

```

**Obtener la longitud de un string**

> obtener la longitud de un string

``` js
let str = "Hola soy un string";
console.log(str.length)//18
``` 

> Obtener partes de cadenas de caracteres

- slice() = nos devuelve una seccion del string

``` js
let str = "Hola soy un string";
let slice_str = str.slice(5, 10)
console.log(slice_str)// soy u
``` 

- substring() = lo mismo que slice

``` js
let str = "Hola soy un string";
let substring_str = str.substring(5, 10)
console.log(substring_str)// soy u
``` 

- substr() = La posicion inicial, con la longitud, nos devuelve una cadena de caracteres empezando con la posicion inicial 

``` js
let str = "Hola soy un string";
let substr_str = str.substr(5, 10)
console.log(substr_str)// soy un str
``` 

> Reemplazar parte del contenido de una cadena de texto

- .Replace

```js
let cadena = "Hola mi nombre es Gorka"
console.log(cadena.replace("gorka", "miguel"))// hola mi nombre es miguek

```
el rplace solo remplaza un solo caracter, si queremos reemplazar varios debemos usar expresiones regulares

> utilizando expresiones regulares /g ( global), para reemplazar todas las instancias

```js
let cadena = "Hola mi nombre es Gorka"
console.log(cadena.replace(/los/g, "miguel"))

```

>  Convertir mayusculas o viceversa

- toLowerCase() -> convierte a minuscula


```js
let input = "ESCOrpio";

console.log(input.toLoweCase()); // escorpio

```

- toUpperCase() -> convierte a mayuscula 

```js
let input = "ESCOrpio";

console.log(input.toUpperCase()); // ESCORPIO

```

- comparaciones

```js
let input = "ESCOrpio";
lt db = "escorpio"

console.log(input.toLowerCase() === db.UpperCase()); //true

```

> formas de concatenar dos cadeans de caracteres

```js
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2)) // Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(str_1 + " " + str_2)// Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(`${str_1} ${str_2}`)// Hola soy la primeracadena. Y yo soy la segunda cadena.

```

> Eliminar espacios del inicio y al final

```js
let str_3 = "     Hola soy un string con espacios al final.   "
console.log(str_3.length)//48
//trim()
console.log(str_3.trim().length)// elimina los espacios del principio y fin.
console.log(str_3.trimStart().length)// Elimina los espacios del inicio.
console.log(str_3.trimEnd().length)// Elimina los espacios del final.
```

> Obtener el caracter que hay en cierta posicion

```js
let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", ...]

console.log(str_4.charAt(5)) //s
console.log(str_4[5])//s
```
> Obtener la posicion de una palabra dentro de una cadena de caracteres

```js
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka")) // 9 // nos dice el primero
console.log(str_5.lastIndexOf("Gorka"))// 48 // nos dice el ultimo
```


**Pagina para las expresiones regulares**
https://regexr.com/


> encontrar palabras dentro de un texto, con que letra empieza, con que letra termina

```js
let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

// saber cuantas veces aparece una palabra
console.log(texto_largo.match(/no/g))//["no","no","no","no" ]

//existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto")) //false

//sabersi un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono")) //true

//saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("arboles."))//true
```