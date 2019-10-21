let btn = document.querySelector("#btn");
btn.addEventListener("click", operacion)

function operacion(){
    let numeros = document.querySelector("#numero");
    let n = Number(numeros.value);

    document.querySelector("#resultado").innerHTML = esPerfeto(n);

}

function esPerfeto(n){
    let c = 0;

    for(var i=1; i<n; i++){

        if (n%i == 0){
            c += i;
        }

    }
    if (c == n){
        return true;
    }else{
        return false;
    }

}