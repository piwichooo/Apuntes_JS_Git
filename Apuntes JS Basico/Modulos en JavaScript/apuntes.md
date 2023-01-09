****
**Modulos en Js**
****

**Exportar tus funciones**

****
**1. CommonJS - require**

con module.exports

``` js
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
```

manera de importar

``` js
const moduloMatematicas = require("./modulos/matematicas.js")
const factorial = moduloMatematicas.factorial;
const { factorial, suma } = moduloMatematicas;
const suma = moduloMatematicas.suma;
console.log(moduloMatematicas.suma)
```

****
**Import ES6 - import**

primero debes poner el typo en el package.json
![](https://media.discordapp.net/attachments/893274242169331715/1060724516260675614/image.png)


ahora poner Export antes de la funcion para el exportacion

``` js
export function suma(a, b) {
    return a + b
}
```

para importar es 

``` js
// import { suma, eleva, nombre } from './modulos/matematicas.js'
import * as moduloMatematicas from './modulos/matematicas.js'

```

otra forma con export default

exportar
``` js
const getAutor = () => {
    return "Miguel de Cervantes"
}

export const libro = "Don Quijote de la Mancha"

export default getAutor
```
importar
``` js
import getAutor, { libro } from './modulos/literatura.js'
```

****
****
**Importar librerias**
****
****

- Primero debemos colocar el package.json
![](https://media.discordapp.net/attachments/893274242169331715/1060777434997342238/image.png)

- Instalar axios para hacer llamadas a servicios externos con -> npm i axios

![](https://media.discordapp.net/attachments/893274242169331715/1060778054936436817/image.png)

- ahora importamos axios de la pagina axios

``` js
import axios from "axios"

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```
un ejemplo en el index de la carpeta :)

