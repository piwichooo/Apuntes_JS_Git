let resultado = 1;
let i = 1;
while (i <= 10) {
  if (i === 0) {
    break;
  }
  resultado *= i;
  i++;
}
console.log(resultado);