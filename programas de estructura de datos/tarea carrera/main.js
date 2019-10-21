class Dado{
    constructor(){
    }

    lanzar(){
        return Math.trunc(Math.random()*6+1);
    }
}

class Carrera{
    constructor(){
        this._correrorOne = 99;
        this._correrorTwo = 99;
        this._dado = new Dado();
    }
    avance(){
        let c = this._dado.lanzar();
    
        if(c == 1){
            this._correrorOne += 3;

        }else if(c == 2 || c == 3){
            this._correrorOne += 1;

        }else{
            this._correrorOne += 2;
        }

        let d = this._dado.lanzar();
        if(d == 1){
            this._correrorTwo += 3;

        }else if(d == 2 || d == 3){
            this._correrorTwo += 1;

        }else{
            this._correrorTwo += 2;
        }
    }
}
let btn = document.querySelector("#btn");
btn.addEventListener("click", estadisticas);

let competencia = new Carrera();
estadisticas();

function estadisticas (){
    for(var i = 0;i<90; i++){
        competencia.avance();
        console.log(competencia._correrorOne, competencia._correrorTwo);
        if(competencia._correrorOne >= 100 && competencia._correrorTwo >= 100){
            console.log("empate");
            document.querySelector("#resultado").innerHTML = "empate";
            return;
        }else if (competencia._correrorOne >= 100){
            console.log("gano el 1");
            document.querySelector("#resultado").innerHTML = "ganador el correror 1";
            return;
        }else if(competencia._correrorTwo >= 100){
            console.log("gano el 2");
            document.querySelector("#resultado").innerHTML = "ganador el correror 2";
            return;
        }


    }
}