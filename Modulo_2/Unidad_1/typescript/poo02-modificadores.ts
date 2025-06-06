class Libro{
    public nombre: string;
    private paginas: number;
    protected dni: string = "1234567890";
    constructor(nombre: string, paginas: number){
        this.nombre = nombre;
        this.paginas = paginas;
    }
    cantidadPaginas(): string{
        return `Cantidad de paginas del libro es ${this.paginas}`;
    }
}

const myLibro = new Libro("la dama rosa", 100);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());
