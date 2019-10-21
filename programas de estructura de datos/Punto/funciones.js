class Punto{
	constructor(x, y){
		this._x = x;
		this._y = y;
	}
	set x(v){
		if (v < 100 && v > -100) {
			this._x = v;
		}
	}

	set y(v){
		if (v < 100 && v > -100) {
			this._y = v;
		}
	}

	get x(){return this._x;}
	get y(){return this._y;}

	toString(){
		console.log("("+this._x+", "+this._y+")");
	}

	distancia(p){
		var d = Math.sqrt( Math.pow(p.x - this.x,2) + Math.pow(p.y - this.y,2) );
		console.log(d);
	}
}

var p1 = new Punto(5, 9);
p1.toString();

var p2 = new Punto(1, 4);
p2.toString();

p1.distancia(p2);