let factorial = 1;
let i = 0;
while (i <= 10) {
    if (i === 0) {
        i++;
        continue;
    }
    
    factorial = factorial * i;
    i++;
    break;
}
console.log(factorial);