let btn = document.querySelector("#btn");
btn.addEventListener('click', funcion);

function funcion(){
    let numeros = document.querySelector("#numero");
    let n = Number(numeros.value);
    let numeros2 = document.querySelector("#numero2");
    let n2 = Number(numeros2.value);
    document.querySelector("#resultado").innerHTML = calcular(n,n2);
}


function calcular (n,n2){
    let c = 0;
    for (var i = 0; i < n; i++) {
        c += Math.pow(n2,i)/fac(i);
    }
    return c;
}

function fac(n){
    let y = 1;
    for (var i = 1; i<= n; i++) {
        y *= i;
      
    }
    return y;
 
}