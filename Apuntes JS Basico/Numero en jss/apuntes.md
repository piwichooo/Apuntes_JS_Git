****
**NUMEROS, PRECISION EN JS, OPERACIONES, REDONDEO, METODOS NUMBERS Y LIMITES EN JS**
****

> Precision

``` js
let b = 0.1;
let c = 0.2;
console.log(b+c); //0.30000000004
``` 

**como conseguimos el 0.3?**
usamos el math.round que lo que haces es redondear el numero sin decimales

``` js
let b = 0.1;
let c = 0.2;
console.log(Math.round(b + c)* 100/100); //0.3
```

> representacion de los numeros en cadenas de texto

``` js
console.log(typeof a;) // number
let a_s = a.toString();

console.log(a_s);//3.5
console.log(typeof a_s);// string
``` 

>redondeo de numero decimales


``` js
let d = 9.8999999999999999
console.log(typeof d); number

//.toFixed(x) - Lmita el numero de decimales al valor x - lo convierte en string
console.log(d.toFixed(4)); // 9.9000
console.log(typeof d.toFixed(4)); //string

let e = 1839.12348981
let f = 2213556153291;
console.log(e.toFixed(2));// 1839.12
console.log(f.toFixed(2));// 2213556153291.00

//.toPrecision(x) - Limita el numero de cifras significativas
console.log(e.toPrecision(7)); // 1839.123
console.log(f.toPrecision(7)); //2.213556e+12

console.log(typeof f.toPrecision(3)); //string
```

> Operador .ValueOf() - obtener valores numericos a partir de literales

``` js
let a = 2;
let b = new Number(3);

console.log(a); //2
console.log(b); //Number 3 {}
console.log(a+b); //5
console.log(a.valueOf() + b.valueOf()); // 5

console.log(b.valueOf()); //3

//con strings

let str = new String("Hola soy un string");
console.log(str); // 1: "h", 2 : "o", ....
console.log(str.valueOf()); // hola soy un string
``` 

>NaN (Not a Number) - infinity

``` js
let n = Number("adios");
console.log(n); // NaN
console.log(isNaN(n)); //true

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor); //infinity
```

> Convertir los string a valores numericos con Number, parseInt y parseFloat

``` js
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero); //string
console.log(numero + num2); //5.8917.2 - esto es error

console.log(Number(numero) + num2); //23.09

console.log(parseInt(numero)); //5 - se convierte a numero y entero
console.log(parseFloat(numero))// 5.89 - con decimal
```

> Numeros hexadecimales (base 16)

se utilizan mucho en asignacion de memoria - bytes

``` js
let numHex = "0x3a5b7"
console.log(parseInt(numHex, 16)); //239031
```

> Obetener los valores maximo y minimo en Javascript

``` js
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;
```


> math.ceil() -> Esta función recibe como argumento el número que queremos redondear y devuelve el número entero más cercano que es mayor o igual al número original.


> Math.floor(). Esta función recibe como argumento el número que queremos redondear y devuelve el número entero más cercano que es menor o igual al número original.