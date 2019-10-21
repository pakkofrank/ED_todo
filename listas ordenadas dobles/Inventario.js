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

    eliminarArticulo(codigo) {
        let b = this._buscarArticulo(codigo);

        if(b == this._primero){
            if(b.siguiente){
                this._primero = b.siguiente;
                this._primero.anterior = null;
            }else{
                this._primero = null;
                this._ultimo = null;
            }
        }else if(b == this._ultimo){
            this._ultimo = b.anterior;
            this._ultimo.siguiente = null;

        }else{
            b.siguiente.anterior = b.anterior;
            b.anterior.siguiente = b.siguiente;
        }
        console.log(this._primero);
        this.actualizarTabla();   
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
