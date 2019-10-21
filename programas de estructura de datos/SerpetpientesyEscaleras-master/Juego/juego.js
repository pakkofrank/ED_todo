class Juego{
  constructor(jugador1, jugador2)
  {
    this.tablero = new Tablero();
    this.jugador1 = new Jugador(jugador1,this.tablero);
    this.jugador2 = new Jugador(jugador2,this.tablero);
    this.dado = new Dado();
  }

  getGanador(jugador){
    if(jugador.posicionActual>=100){
      jugador.ganador=true;
    }
    else{
      jugador.ganador=false;
    }
  }
}

class Tablero{
  constructor()
  {
    this.casillas = [];
    for(var i = 0; i<=100; i++){
      this.casillas[i]=i;
    }
    //ESCALERAS
    this.casillas[2]=38;
    this.casillas[7]=14;
    this.casillas[8]=31;
    this.casillas[15]=26;
    this.casillas[21]=42;
    this.casillas[28]=84;
    this.casillas[36]=44;
    this.casillas[51]=67;
    this.casillas[78]=98;
    this.casillas[71]=91;
    this.casillas[87]=94;

    //SERPIENTES
    this.casillas[16]=6;
    this.casillas[46]=25;
    this.casillas[49]=11;
    this.casillas[62]=19;
    this.casillas[64]=60;
    this.casillas[74]=53;
    this.casillas[89]=68;
    this.casillas[92]=88;
    this.casillas[95]=75;
    this.casillas[99]=80;
    console.log(this.casillas[i])
  }

  

}

class Jugador{
  constructor(nombre, classTablero)
  {
    this.nombre = nombre;
    this.posicionActual=0;
    this.posicionPasada=0;
    this.ganador=false;
    this.tablero=classTablero;
  } 
  // lanzarDado(){
  //   var num = Dado.getValor();
  //   return num;
  // }
  avanzar(cuanto){
    var tablero= this.tablero;
    this.posicionPasada=this.posicionActual;
    this.posicionActual+=cuanto;
    if (this.posicionActual >= 100){ 
      this.posicionActual=100;
      return this.posicionActual;}
    else{
      this.posicionActual=tablero.casillas[this.posicionActual];
    }

  }
}

class Dado{
  constructor()
  {
    this.valor = null;
  }
  getValor(){
    this.valor = Math.floor(Math.random()*6 )+1;
    
    return this.valor;
    
  }
}