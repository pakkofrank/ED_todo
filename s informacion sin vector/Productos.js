export default class Producto {
    constructor(objproducto) {
        this._codigo = objproducto.codigo;
        this._nombre = objproducto.nombre;
        this._precio = objproducto.precio;
        this._cantidad = objproducto.cantidad;
        this._descripcion = objproducto.descripcion;
        this._siguiente = null;
       

    }
    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }
    get descripcion() {
        return this._descripcion;
    }
    get siguiente() {
        return this._siguiente;
    }
    get anterior() {
        return this._anterior;
    }
}