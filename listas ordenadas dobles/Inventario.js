export default class Inventario {
    constructor(tabla) {
        this._tabla = tabla;
        this._primero = null;
        this._ultimo = null;
    }
    _agregar(articulo) {
        
    }
    actualizarTabla() {
        this._tabla.innerHTML = "";
        let nuevo = this._primero;

        while (nuevo != null) {
            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = nuevo.codigo;
            row.insertCell(1).innerHTML = nuevo.nombre;
            row.insertCell(2).innerHTML = nuevo.precio;
            row.insertCell(3).innerHTML = nuevo.cantidad;
            row.insertCell(4).innerHTML = nuevo.descripcion;

            nuevo = nuevo.siguiente;
        }
    }

    _buscarArticulo(codigo) {
        let nuevo1 = this._primero;

        while (nuevo1 != null) {
            if (nuevo1.codigo == codigo) {
                return nuevo1;
            }
            nuevo1 = nuevo1.siguiente;
        }
    }

    eliminar(codigo){
		var actual = this._primero;
		if (this._primero.codigo == codigo) {
			if (!this._primero.siguiente) {
				this._primero = null;
				this._ultimo = null;
			}else{
				this._primero = this._primero.siguiente;
			}
			return true;
		}else{
			while(actual.siguiente && actual.siguiente.codigo != codigo){
				actual = actual.siguiente;
			}
			if (actual) {
				if (actual.siguiente == this._ultimo) {
					actual.siguiente = null;
				}else{
					actual.siguiente = actual.siguiente.siguiente;
				}
				return true;
			}else{
				return null;
			}
		}


	}

}