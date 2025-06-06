let cantidad: number = 19;
let nombre: string = "Juan";
let opcion: boolean = true;
console.log("cantidad: ", cantidad);
console.log("nombre: ", nombre);
console.log("opcion: ", opcion);

let opcional:any ="comodin any";

opcional = 100;

//tipos de datos compuestos
let equipos: string[] = ["Barcelona, Real Madrid, Manchester City, Bayern Munich"];
console.log("equipos: ", equipos);
let edades: Array<number> = [19, 20, 21, 22, 23, 24, 25];
console.log("edades: ", edades);

//tuplas
let persona: [string, number] = ["Juan", 19];
console.log("Alumno: ", persona);

//enums
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}
let miestado: Estados = Estados.ENTREGADO;
console.log(miestado);