export default class Tienda {
    constructor(tabla) {
        this._tabla = tabla;
        this._primerProducto = null;
        this._ultimoProducto = null;
    }
    _agregar(objproducto) {
        if (this._primerProducto == null) {
            this._primerProducto = objproducto;
            this._ultimoProducto = objproducto;
        } else {

            this._ultimoProducto._siguiente = objproducto;
            this._ultimoProducto = objproducto;
        }
        this.actualizarTabla;
        console.log(this._primerProducto);

    }


    actualizarTabla() {
        this._tabla.innerHTML = "";
        let nuevo = this._primerProducto;

        while (nuevo != null) {
            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = nuevo.codigo;
            row.insertCell(1).innerHTML = nuevo.nombre;
            row.insertCell(2).innerHTML = nuevo.precio;
            row.insertCell(3).innerHTML = nuevo.cantidad;
            row.insertCell(4).innerHTML = nuevo.descripcion;
            row.insertCell(5) = this._btnEliminar()

            nuevo = nuevo.siguiente;
        }
    }

    _buscarProducto(codigo) {
        let nuevo1 = this._primerProducto;

        while (nuevo1 != null) {
            if (nuevo1.codigo == codigo) {
                return nuevo1;
            }
            nuevo1 = nuevo1.siguiente;
        }


    }

    _buscarAnterior(codigo){
        let b = this._primerProducto;
        while(b.siguiente.codigo != codigo){
            return b;
        }
        b = b.siguiente;
    }


    agregarProducto(objproducto) {
        this._agregar(objproducto);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "El producto se registro correctamente"
        })
    }

    _btnEliminar(row, producto) {
        let btnEliminar = document.createElement("input");
        btnEliminar.value = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn-danger";
        btnEliminar.id = "btnEliminar";

        btnEliminar.addEventListener("click", () => {
            let p = new Tienda();
            p._eliminarProducto(row, producto)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnEliminar);

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



    _eliminarProducto(row, producto) {
        let r = this._buscarProducto(producto.codigo);
      if(r == this._primerProducto){
        this._primerProducto = r.siguiente;
      }
      else{
        let r2 = this._buscarAnterior(producto.codigo);

        r2.siguiente = r1.siguiente;
      }
      
      console.log(this._primerProducto);
      row.remove();
         
    }

    _invertir(producto){
        let u = this._ultimoProducto;
        let a = u._buscarAnterior(producto.codigo);

    }


}