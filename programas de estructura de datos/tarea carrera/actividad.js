/*
while(c1.posicion>=100 & c2.posicion < 100){

}

if(c1.posicion>=100 && c2.posicion>=100){
    alert("empate");
}

if(c1.posicion<=100){
    alert("gano 1");
}*/

class Correror{
    constructor(numero){
        this._numero = numero;
        this._posiciones = 0;
    }

    get posicion(){

    }
    set numero(val){
        if(val>=0 && val<=100){
            this._numero = val;

        }else{
            this._numero = 1;
        }   
    }
    get numero (){
        return this._numero;      
    }
}

console.log(c1.numero);