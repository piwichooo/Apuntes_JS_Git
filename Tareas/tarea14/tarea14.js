function generaSecuenciaFibonacci(num) {
  const secuencia = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      secuencia.push(i);
    } else {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
  }
  return secuencia;
}

console.log(generaSecuenciaFibonacci(6));  // [1, 1, 2, 3, 5, 8]
console.log(generaSecuenciaFibonacci(10)); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
