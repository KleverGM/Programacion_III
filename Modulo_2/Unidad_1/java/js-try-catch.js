try {
    const user = JSON.parse('{"name": "John", "edad": 30}');
    console.log("conversion exitosa");
} catch {
    console.error("Error del JSON:");
}
console.log("final del sistema");

try {
    console.log("intentenado abrir archivo");
    throw new Error("archivo no encontrado");
} catch (error) {
    console.error("Error:", error.message);
} finally{
    console.log("termino el proceso");
}