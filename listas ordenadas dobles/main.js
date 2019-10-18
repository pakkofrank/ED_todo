import Articulo from "./Articulo.js";
import Inventario from "./Inventario.js";

class Main {
    constructor() {
        let inventario = new Inventario(document.querySelector("#tabla"));

        document.querySelector("#agregar").addEventListener('click', () => {
            let codigo = Number(document.querySelector("#codigo").value);
            let nombre = document.querySelector("#nombre").value;
            let precio = Number(document.querySelector("#precio").value);
            let cantidad = Number(document.querySelector("#cantidad").value);
            let descripcion = document.querySelector("#descripcion").value;

            let objArticulo = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion

            }

            let articulo = new Articulo(objArticulo);
            inventario.agregar(articulo);
            inventario.invertir(articulo);
            inventario.actualizarTabla();
            
        });
        document.querySelector("#btnEliminar").addEventListener('click', () =>{
            let eliminar = document.querySelector("#codigoE").value;
            inventario.eliminarArticulo(eliminar);

        })

        
    }
}

let m = new Main();