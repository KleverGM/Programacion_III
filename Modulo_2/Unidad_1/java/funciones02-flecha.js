const saludar = ()=> {
    console.log("hola desde arrow funcion")
}
saludar();

const cuadrado1 = (num)=> {
    console.log("cuadrado de", num, "igual a", num * num)
}
cuadrado1(6);

const cuadrado2= (num) => {
    console.log("cuadrado de", num, "igual a", num * num)
}
let a = prompt("Ingrese el numero:")
a = number(a);
cuadrado2(a);
   
  
const resultado = num * num;{
alert("El cuadrado de " + num + " es igual a " + resultado);
};
cuadrado1();
  



//retorno directo
const cuadrado = x => x * x;
console.log("5*5=",cuadrado(5));


