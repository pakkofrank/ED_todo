let btn = document.querySelector("#btn");
btn.addEventListener('click', funcion);

function funcion(){
    let numeros = document.querySelector("#numero");
    let n = Number(numeros.value);
    document.querySelector("#resultado").innerHTML = cuatro(n);
}

function cuatro(n){
    let c = 0;
    let gg = 4;

    for (var i = 1; i<2*n; i+=2) {
       c += gg/i;
       gg *= -1;   
    }
    return c;
    //console.log(c)
}