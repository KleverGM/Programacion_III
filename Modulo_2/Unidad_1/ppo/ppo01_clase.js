class cuentabancaria {
    _saldo;
    constructor(saldoinicial) {
        this._saldo = saldoinicial;
    }
    depositar(cantidad) {
        this._saldo += cantidad;
    }
    retirar(cantidad){
        if (cantidad<=this._saldo){
            this._saldo -= cantidad; 
        } else {
            console.log(" fondos insufificentes ");
        }
    }
    get saldo() {
        return this._saldo;
    }
}
const cuenta = new cuentabancaria(1000); 
console.log(cuenta.getsaldo());
cuenta.depositar(500);
console.log(cuenta.getsaldo());
cuenta.retirar(2000);
cuenta.retirar(100);
console.log(cuenta.getsaldo());