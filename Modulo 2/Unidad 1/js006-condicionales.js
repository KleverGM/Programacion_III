console.log("condicionales");
console.log("if simple");
temperatura = 25;
if (temperatura > 20) {
    console.log("La temperatura es alta");
}
console.log("if else");
usuariologeado = true;
if (usuariologeado) {
    console.log("Bienvenido");
}else{
    console.log("No estás logueado, inicia sesion");
}
console.log("if else if else");
nota = 8;
if (nota >= 7) {
    console.log("aprobado");
}else if (nota >= 5) {
    console.log("suficiente");
}else{
    console.log("suspenso");
}
console.log("if anidado");
edad = 18;
tienelicencia = true;
if (edad >= 18) {
    if (tienelicencia) {
        console.log("Puedes conducir");
    }else{
        console.log("No tienes licencia");
    }
}else{
    console.log("Eres menor de edad");
}

console.log("if con operador logico");
let esestudiante = true;
let tienedescuento = true;
if (esestudiante && tienedescuento) {
    console.log("aplica tarifa reducida");
}
esadmin = true;
eseditor = false;
if (esadmin||eseditor){
    console.log("Puedes editar");
}