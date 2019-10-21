let btn = document.querySelector("#btn");
btn.addEventListener("click", tiempo)

function tiempo (){
    let eH = document.querySelector("#eHoras").value;
    let eM = document.querySelector("#eMinutos").value;
    let eS = document.querySelector("#eSegundos").value;
    let sH = document.querySelector("#sHoras").value;
    let sM = document.querySelector("#sMinutos").value;
    let sS = document.querySelector("#sSegundos").value; 
    
    let horas = (sH-eH);
    
    let minutos = (sM-eM);

    if(eM > sM){

        minuto = minutos*-1;
    }else{
        minutos *= 1;
    }

    let segundos = (sS-eS);
    if(eS < sS){
        segundos *= -1;
    }


    document.querySelector("#resultado").innerHTML = "usted hoy trabajo "+horas+"hrs";

}
