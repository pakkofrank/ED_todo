class Mapa{
    constructor(pX, pY){
        this._pX = pX;
        this._pY = pY;
    }
    set pX(v){
       if(v < 100 && v > -100){
        this._pX = v;
       }
    }
    set pY(v){
       if (v< 100 && v > -100){
        this._pY = v ;
       }
    }
    get pX(){
        return this._pX;
    }
    get pY(){
        return this._pY;
    }

    toString(){
       console.log("("+this._pX+","+this._pY+")");        
    }

    distancia(n){
        var formula = Math.sqrt(Math.pow(n.pX - this.pX,2)+Math.pow(n.pY-this.pY,2));
        return formula;
       
    }
}


let btn = document.querySelector("#btn");
btn.addEventListener("click", datos)

let vec = [];

function datos(){
    let x = document.querySelector("#numero1").value;
    let y = document.querySelector("#numero2").value;

    let listo = sumDistancia(x, y);

    document.querySelector("#resultado").innerHTML = listo;

}

function sumDistancia(x, y){
    let c = 0;

    let p = new Mapa(x, y);
    p.toString();

    vec.push(p);

    for (var i = 0; i < vec.length-1; i++){
        c += vec[i].distancia(vec[i+1]);
    }
    return c;


}



