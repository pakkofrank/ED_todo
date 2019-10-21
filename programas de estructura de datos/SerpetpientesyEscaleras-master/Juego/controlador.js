document.getElementById("iniciar").addEventListener('click', () => {
	document.getElementById('proceso').innerHTML =""
	var nombre1 = prompt('Nombre del jugador 1','');
	var nombre2 = prompt('Nombre del jugador 2','');
	const juego = new Juego(nombre1, nombre2);
	var jugador1 = juego.jugador1;
	var jugador2 = juego.jugador2;
	var dado = juego.dado;
	var contador = 0;
	var espacio = '                      ';
	do{
		contador++;
		if (contador%2==0){ 
			var numero2 = dado.getValor();
			jugador2.avanzar(numero2);	
			var diferencia2 = jugador2.posicionActual-jugador2.posicionPasada;
			if(diferencia2>0){ 
				if(diferencia2>6){ 
				let a = (`${jugador2.nombre}: El dado cayó en ${numero2}, te tocó escalera`);
				let b = (`estás en la casilla ${jugador2.posicionActual}`);
				document.getElementById("proceso").innerHTML += a + ", " + b + espacio;}
				else{ 
				let a = (`${jugador2.nombre}: El dado cayó en ${numero2}, avanzas ${numero2} casillas`);
				let b = (`estás en la casilla ${jugador2.posicionActual}`);
				document.getElementById('proceso').innerHTML += a + ", " + b + espacio;}}
			else{ 
				let a =(`${jugador2.nombre}: El dado cayó en ${numero2}, te tocó serpiente`);
				let b =(`regresas a la casilla ${jugador2.posicionActual}`);
				document.getElementById('proceso').innerHTML += a + ", " + b + espacio;}
			juego.getGanador(jugador2);
			if (jugador2.ganador==true){ 
				let a = (`FIN DEL JUEGO, ${jugador2.nombre.toUpperCase()} HA GANADO`);
				document.getElementById('proceso').innerHTML += a;
				break;}
			}	
		else{ 
			var numero1 = dado.getValor();
			jugador1.avanzar(numero1);
			var diferencia1 = jugador1.posicionActual-jugador1.posicionPasada;
			if(diferencia1>0){ 
				if(diferencia1>6){ 
				let a = (`${jugador1.nombre}: El dado cayó en ${numero1}, te tocó escalera`);
				let b = (`estás en la casilla ${jugador1.posicionActual}`);
				document.getElementById('proceso').innerHTML += a + ", " + b + espacio}
				else{ 
					
				let a =(`${jugador1.nombre}: El dado cayó en ${numero1}, avanzas ${numero1} casillas`);
				let b =(`estás en la casilla ${jugador1.posicionActual}`);
				document.getElementById('proceso').innerHTML += a + ", " + b + espacio}}
			else{
				let a =(`${jugador1.nombre}: El dado cayó en ${numero1}, te tocó serpiente`);
				let b =(`regresas a la casilla ${jugador1.posicionActual}`);
				document.getElementById('proceso').innerHTML += a + ", " + b + espacio;}
			juego.getGanador(jugador1);
			if (jugador1.ganador==true){  
				let a = (`FIN DEL JUEGO, ${jugador1.nombre.toUpperCase()} HA GANADO`);
				document.getElementById('proceso').innerHTML += a;
				break;}
			}
	}while(jugador1.ganador==false || jugador2.ganador==false);	
})
