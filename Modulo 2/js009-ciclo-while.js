let i;
while (i<=5){
    console.log("Iteracion while: ", i)
    i++
}

let cont=1;
while (cont <= 5) {
    console.log( 3, "X", cont, "=", 3 * cont);
    cont++;
}

let mult=1;
console.log("Do...while");
do {
    console.log( 5, "X", mult, "=", 5 * mult);
    mult++;
} while (mult<=10);

let n=10;
console.log("Do...while");
do {
    console.log("n ", n);
    n--;
} while (n>=6);

let animales = ["perro", "gato", "conejo", "loro"]
let animal=0;
do {
    console.log("animal", animal, "es",animales[animal]);
    animal++;
} while (animal<=9);

