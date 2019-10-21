let btn = document.querySelector("#accion");
btn.addEventListener('Click', extra);

                             
function formula(n){
	let c = 0;

	for (var i = 2; i <= n/2; i++) {
		if (2%i==0){
			c++;
		}

		if (c==2){
			return true;

		}else{

			return false;
   
		}
	}
}

function extra(){
	let n = document.querySelector("#numero");
	numero = parseInt(n)

    for (var i = 1; i <=numero; i++){
    	if(formula(i)){
			alert(gg);
			//document.querySelector("#resultado").innerHTML += i+", ";
		}
		
    	

    }

}

