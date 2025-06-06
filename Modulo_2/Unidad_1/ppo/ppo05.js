class Calculadora {
    suma(a, b, c) {
        if (c===undefined){
            console.log(`suma de dos numeroa:  ${a+b}`);
        } else {
            console.log(`suma de tres numeros:  ${a+b+c}`);
        }
    }
    multiplicar(x, y=1, z=3) {
        console.log(`resultado : ${x*y*z}`);
    }
}
const calc = new Calculadora();
calc.suma(5, 3);
calc.suma(5, 3, 4);
calc.multiplicar(2, 3, 4);
calc.multiplicar(2, 3);
calc.multiplicar(2);
