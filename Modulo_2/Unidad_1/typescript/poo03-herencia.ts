class Vehiculo {
    public marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
    moverse(): void{
        console.log(`La marca ${this.marca} esta en movimiento`);
    }
}

class Moto extends Vehiculo {
    hacerCaballito(): void{
        console.log(`La moto ${this.marca} esta haciendo caballito`);
    }
}
const miVehiculo = new Vehiculo("Toyota");
miVehiculo.moverse();
const miMoto = new Moto("Yamaha");
miMoto.moverse();
miMoto.hacerCaballito();