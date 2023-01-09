let factorial = 1;
for (let i = 0; i <= 10; i++) {
    if (i === 0){
        continue;
    }

    factorial = factorial * i;
    
}
console.log(factorial);
