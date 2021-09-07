import {ServiciosInventario} from "../services/servicios-inventario.js";

import {ingresoInventario} from "../views/ingreso-inventario.js";
import {menuDeOpciones} from "../views/menu-principal.js";


let serviciosInventario = new ServiciosInventario();


(function funcionPrincipal() {
   let ejecutarAccion = async function(opcion) {
      switch (opcion) {
         case '1':
            let cadenaElectrodomestico = await ingresoInventario.ingresarCadenaElectrodomesticos("INGRESO DE PRODUCTOS AL INVENTARIO");
            serviciosInventario.agregarProductosAlInventario(cadenaElectrodomestico);
            break;
         case '2':
            let cadenaDeCompra = await ingresoInventario.ingresarCadenaElectrodomesticos("COMPRA DE ELECTRODOMESTICOS");;
            serviciosInventario.venderProductos(cadenaDeCompra);
            break;
         case '3':
            console.log('\n****FACTURA DE PAGO**** \n' + serviciosInventario.generarFacturaDePago() + '\n************ \n');
            break;   
         case '4':
            console.log('\n****INVENTARIO**** \n' + serviciosInventario.mostrarInventario() + '\n************ \n');
            break;
         case '5':
            if(window.confirm('Esta seguro que desea finalizar la compra?')){
               console.log('\n****FACTURA DE PAGO**** \n' + serviciosInventario.generarFacturaDePago() + '\n************ \n');
               serviciosInventario.finalizarCompra();
            }
            break;
         case '6':
            window.alert('Ha decidido salir, hasta luego.');
            break;
         default:

            break;
      }
   }
   
   async function menuOpciones() {
      let opcElegida;
      try {
         do {
            opcElegida = await menuDeOpciones.mostrarMenuPrincipal();
            await ejecutarAccion(opcElegida);
         } while(opcElegida != '6');
      } catch(Exception) {
         console.log("Error: " + Exception);
      }
   }
   menuOpciones();
})();