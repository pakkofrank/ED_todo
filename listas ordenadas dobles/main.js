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

            let objProducto = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion

            }

            let articulo = new Articulo(objProducto);
            inventario.agregarArticulo(articulo);
            inventario.actualizarTabla();

            
        });

        document.querySelector("#btnEliminar").addEventListener('click', () => {
            inventario.eliminar(document.querySelector("#codigoE").value);
        
               
        });

        


        function eliminar() {
            var cod = document.querySelector("#txtCodigoE").value;
            var x = inventario.eliminar(cod)
        
            if (x) {
                document.querySelector("#actividad").innerHTML += "Articulo eliminado<br>";
            }else{
                document.querySelector("#actividad").innerHTML += "No se encontro<br>";
            }
            document.querySelector("#lista").innerHTML = inventario.toString();
        }
    }
}

let m = new Main();