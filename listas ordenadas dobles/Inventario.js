export default class Inventario {
    constructor(tabla) {
        this._tabla = tabla;
        this._primero = null;
        this._ultimo = null;  
        console.log(this._articulo)
    }

    agregar(articulo) {
        if (this._primero == null) {
            this._primero = articulo;
            this._ultimo = articulo;
        } else {
            let anterior = this._ultimo;
            this._ultimo._siguiente = articulo;
            this._ultimo = articulo;
            this._ultimo.anterior = anterior;
        }
        console.log(this._primero);
        this.actualizarTabla();
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

    _btnEliminar(row, articulo) {
        let btnEliminar = document.createElement("input");
        btnEliminar.value = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn-danger";
        btnEliminar.id = "btnEliminar";

        btnEliminar.addEventListener("click", () => { 
            this.eliminarArticulo(row, articulo)
        });
        row.cells[5].innerHTML = "";
        row.cells[5].appendChild(btnEliminar);

    }

    eliminarArticulo(row, articulo) {
        let a = this._buscarArticulo(articulo.codigo);
        if(a == this._primero){
            this._primero = a.siguiente;
        }else{
            let b = this._buscarArticulo(articulo.codigo);
            a.siguiente.anterior = b;
            b.siguiente = a.siguiente;
        }
        console.log(this._primero);
        row.remove();
       
        }

        invertir(){
            let u = this._ultimo;
            while(u !== null){
                console.log('invertido chido ' + u.codigo);
                u = u.anterior;  
            }
        }
       


    _buscarArticulo(codigo) {
        let b = this._primero;
        while(b.codigo != codigo){
            b = b.siguiente;
        }
        return b;

    }

    


}
