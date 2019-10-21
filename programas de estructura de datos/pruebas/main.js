let btn = document.querySelector("#btn");
btn.addEventListener("click", restarHoras)

function restarHoras() {
    
    inicio = document.getElementById("inicio").value;
    fin = document.getElementById("fin").value;
    
    inicioMinutos = parseInt(inicio.substr(3,2));
    inicioHoras = parseInt(inicio.substr(0,2));
    
    finMinutos = parseInt(fin.substr(3,2));
    finHoras = parseInt(fin.substr(0,2));
  
    transcurridoMinutos = finMinutos - inicioMinutos;
    transcurridoHoras = finHoras - inicioHoras;
    
    if (transcurridoMinutos < 0) {
      transcurridoHoras--;
      transcurridoMinutos = 60 + transcurridoMinutos;
    }
    
    horas = transcurridoHoras.toString();
    minutos = transcurridoMinutos.toString();
    
    if (horas.length < 2) {
      horas = "0"+horas;
    }
    
    if (horas.length < 2) {
      horas = "0"+horas;
    }
    
    document.getElementById("resta").value = horas+":"+minutos;
  
  }