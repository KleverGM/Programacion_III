for (let i =1; i=10; i++){
    console.log("Iteracion : ", i)
}

for (let i =2; i=10; i++){
    console.log(2, "X", i, "=", 2*i)
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 ===0){
        console.log("Suma de pares: ", i);
        suma += i;
    }
}
console.log("Total Suma de pares: ", suma);

let palabra ="welcome to javascript";
for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
}

for (let i =1; i=10; i++){
    console.log("cuadradod de ", i, "es", i*i)
}