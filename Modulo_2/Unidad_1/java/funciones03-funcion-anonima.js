//funcion anonima

console.log("funcioes anonimas");
setTimeout(function(){
    console.log("hola desde settime")
}, 3000);

let mensaje = function(){
    return "Mensaje desde una funcion anonima";
}
console.log(mensaje());
