****
**Estructuras de control - Bucles,Bifurcaciones**
****

**Bifucarciones**

> If...else

``` js
let saldo=50;
let efectivo = 100;

if(efectivo < saldo){
    console.log("Puedes sacar dinero");
}

if(efectivo < saldo){
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
}
```

> If else + if else

``` js
let nota = 5;

if (nota === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente");
}else if (nota === 4){
    console.log("Buen trabajo");
}else if (nota === 3){
    console.log("Bien");
}else if (nota === 2){
    console.log("Mal");
}else if (nota === 1){
    console.log("Pudrete");
} else {
    console.log("error");
}
```
> switch -> en funcion de un valor poner mas condiciones, osea lo mismo que else if pero mas practico

``` js
let nota = 5;

switch(nota){
    case 5:
        console.log("Buen trabajo");
        break;
    case 4:
        console.log("bien");
        break;
    case 3:
        console.log("meh");
        break;
    case 2:
        console.log("burh");
        break;
    case 1:
        console.log("Vete a la mierda");
        break;
    default:
        console.log("Error");
        break;
}
```
poner un default porsiacaso es buena practica

**Comparaciones**

> Igualdad

``` js
let a = 5;
let b = 5;

if(a == b){ //Solo compara el valor
    console.log("a es igual a b - Debil")
}

if(a === b){ // Compara el valor y el tipo
    console.log("a es igual a b -Fuerte")
}
```

> != -> diferentes en valor
> !== diferente valor y tipo

> Comparaciones >, <, >=, <=

****
**BUCLES FOR Y WHILE**
****

> Bucles For

For (inicializacion; condicion; actualizacion){

}

``` js
for (let i = 0; i < 10; i++){
    // en el caso de i, se puede usar i = i + 1, i += 1, i++
    console.log(i) //0,1,2,3,4,5,6,7,8,9
}
for (let i = 0; i < 10; i += 3){
    console.log(i) //0,3,6,9
}
```

for con una lista
``` js
let lista [1,4,6,2,3,7,8,19];
for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2);//2 , 8....
}

```
> Bucles For of
esencial para usarlo en listas, hagamos lo mismo de arriba pero con for of
``` js
let lista [1,4,6,2,3,7,8,19];
for (let valor of lista){
    console.log(valor); 1,4,6,...
}
```

> Bucles For Each
Tambien para las listas, hagamos el mismo ejemplo pero con for each

``` js
lista.forEach(valor => {
    console.log(valor)// 1,4,6,2,....
})
``` 

> Bucles For in
sirve para los objetos

![](https://media.discordapp.net/attachments/1054887102908735519/1055593201500684398/image.png)

****
**Bucles WHile**
****
``` js
let i = 0;
let max = 10;
while (i < max){
    console.log(i); //0,1,2,3,4,5
    i++;
}
``` 


****
**Do while**
****

aunque el while no se cumpla, el do siempre se ejecutara

``` js
i = 15;

do {
    console.log("Se esta ejecutando el Do") // Se esta ejecutando el Do
} while (i < max)
``` 


> Break, continue
break -> sale del bucle
continue -> se queda y vuelve para arriba

``` js

let lista = [1,2,3,4,5,6,7,8];

for (let i = 0; i < lista,length; i++){
    if (lista[i] === 3){
        continue; // se va para arriba
    }
    console.log(lista[i]); //1,2,4,5,6

    if ( lista[i] > 5){
        break; //para, se va del bucle
    }
}

``` 
> **labels**

![](https://media.discordapp.net/attachments/1054887102908735519/1055608938286022706/image.png)