// La fecha de hoy
const hoy = new Date();

// La fecha de tu nacimiento (18 de febrero del año 2000)
const nacimiento = new Date(2000, 1, 18);

// Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = hoy > nacimiento;

// Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate();

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = nacimiento.getMonth();

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = nacimiento.getFullYear();

console.log(hoy);  // Mon Dec 27 2021 17:51:41 GMT-0500 (hora estándar de Colombia)
console.log(nacimiento);  // Fri Feb 18 2000 00:00:00 GMT-0500 (hora estándar de Colombia)
console.log(esMasTarde);  // true
console.log(diaNacimiento);  // 18
console.log(mesNacimiento);  // 1
console.log(anioNacimiento);  // 2000