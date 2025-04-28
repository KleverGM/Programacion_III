console.log("recorrer arreglos");
let numeros = [2,3,2,3,243,4]
for(let num of numeros){
    console.log(" numero :",num);
}

let ciudades = ["quito", "guayaquil", "caracas", "maracaibo", "tumbaco"]
for(let i=0; i < ciudades.length; i++){
    console.log(" ciudad :",ciudades[i]);
}

let colores = ["rojo", "verde", "azul", "amarillo", "morado"]
colores.forEach(function (valor, indice){
    console.log("color ", indice, " : ", valor);
}
)