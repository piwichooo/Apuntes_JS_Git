
const logger = require('./logger')


const Elerror = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("ta mal, debe ser un numero")
}

const numero = 2;

try {
    //console.log("correcto");
    const doble = Elerror(numero)
    console.log(doble)
} catch (e) {
    console.error("ERROR!")
} finally {
    console.log("Yo siempre me ejecuto");
}
