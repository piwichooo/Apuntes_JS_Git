****
**Gestion de errores**
****

- Try catch

``` js
const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")// esta es la variable (e) del catch
}

// const elDoble = miFuncion("a1a")
const numero = "8";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta") //Esta ejecutandose de manera correcta
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno") // esto se va a ejecutar si se pro
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
```

- Cuandro creamos un paquete .jsom, ponemos ignorar las preguntas con npm init -y
 