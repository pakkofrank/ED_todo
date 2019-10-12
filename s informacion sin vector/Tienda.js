export default class Tienda {
    constructor(tabla) {
        this._tabla = tabla;
        this._primerProducto = null;
        this._ultimoProducto = null;
    }
    _agregar(objproducto) {
        if(this._primerProducto == null){
            this._primerProducto = objproducto;
            this._ultimoProducto = objproducto;
        }else{
            let p = this._ultimoProducto;
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
                row.insertCell(5);
                this._btnEliminar(row, producto);
                
                nuevo = nuevo.siguiente;
            }
    }

        _buscarProducto(codigo) {
            let nuevo1 = this._primerProducto;

            while(nuevo1 != null){
                if(nuevo1.codigo == codigo){
                    return nuevo1;
                }
                nuevo1 = nuevo1.siguiente;
            }
    
           
    }


    agregarProducto(objproducto) {
        this._agregar(objproducto);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "El producto se registro correctamente"
        })
    }

    _btnEliminar(row, producto){
        let btnEliminar = document.createElement("input");
        btnEliminar.value = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn-danger";
        btnEliminar.id = "btnEliminar";

        btnEliminar.addEventListener("click", ()=>{
            let p = new Tienda();
            p._eliminarProducto(row, producto)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnEliminar);

    }



    _eliminarProducto(row, articulo){
        Swal.fire({
            type: "question",
            title: "¿Deseas eliminar al contacto?",
            text: articulo.codigo,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No"
        }).then(result => {
            if (result.value) {
                let r = this._buscarProducto(codigo);
            }
        });
      }


}
