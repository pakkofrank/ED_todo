export default class Inventario {
    constructor(tabla) {
        this._tabla = tabla;
        this._primero = null;
        this._ultimo = null;  
        console.log(this._articulo)
    }

    agregar(articulo) {
        if (this._primero = null) {
            this._primero = articulo;
            this._ultimo = articulo;
        } else {
            let anterior = this._ultimo;
            this._ultimo.siguiente = articulo;
            this._ultimo = articulo;
            this._ultimo.anterior = anterior;
        }
        console.log(this._primero);
    }


    actualizarTabla(articulo) {
        let row = this._tabla.insertRow(-1);
        let celdaCodigo = row.insertCell(0);
        let celdaNombre = row.insertCell(1);
        let celdaPrecio = row.insertCell(2);
        let celdaCantidad = row.insertCell(3);
        let celdaDescripcion = row.insertCell(4);
        row.insertCell(5);


        celdaCodigo.innerHTML = articulo.codigo;
        celdaNombre.innerHTML = articulo.nombre;
        celdaPrecio.innerHTML = articulo.precio;
        celdaCantidad.innerHTML = articulo.cantidad;
        celdaDescripcion.innerHTML = articulo.descripcion;
        this._btnEliminar(row, articulo);

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descipcion: articulo.descripcion
        };
        return objArticulo;
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
                console.log('invertido ' + u.codigo);
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
