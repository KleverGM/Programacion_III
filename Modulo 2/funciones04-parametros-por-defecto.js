//funciones con parametros 
console.log("funciones con parametros");
function saludar(nombre = "invitado"){
    console.log("bienbenido: ", nombre);
}
saludar("pedro");
saludar();

function multiplicar(num1 = 5, num2=10){
    console.log("multiplicaion de :",num1,"*",num2,"=", num1*num2); 
}
multiplicar(3,4);
multiplicar();


function area(num1 = 5, num2=10, num3= 2){
    console.log("Base: ",num1,"*", "altura: ",num2,"sobre", num3, "=", (num1*num2)/num3); 
}
area(5,5);
area();

nota =[8,5,8,7,9]
function promedio(notas) {
let suma = 0;
 for (let num of notas) {
suma += num;
}
}

