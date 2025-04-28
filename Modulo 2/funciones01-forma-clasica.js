function saludar() {
    console.log("hola desde una funcion")
}
saludar();

function suma(){
    console.log("suma 1 + 2 =", 1 + 2);

}
function resta(){
    console.log("resta 10 - 2 =", 10 - 2);
}
suma();
resta();

//funcion con parametro
function dividir(a,b){
    return a / b;
}

let resultado = dividir(40, 8);
console.log("resultado: ", resultado);

function tabla(numero){
    let i=1
    while(i<=10) {
        console.log(i," * ", numero, "=", i * numero);
        i++;
    }
}
tabla(5)


