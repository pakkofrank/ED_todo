export default class Dado{
    constructor(){

    }
    lanzar(){
        return Math.trunc(Math.random(dado1)*6+1);
    }

}

class Correror{
    constructor(){

    }
}

/*

let dado1 = new Dado();
let vector = [0,0,0,0,0,0];
for(var i = 0; i < 100; i++){
    vector[dado1.lanzar()-1]++;
    
}
console.log(vector);
*/
