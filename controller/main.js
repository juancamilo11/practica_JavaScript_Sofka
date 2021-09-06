import {Electrodomestico} from "../class/Electrodomestico.js";
import {Nevera} from "../class/Nevera.js";
import {Televisor} from "../class/Televisor.js";

import {Database} from "../database/datos-inventario.js";

import {generarFactura} from "../services/generacion-factura.js";
import {ServiciosInventario} from "../services/servicios-inventario.js";

import {ingresoInventario} from "../views/ingreso-inventario.js";
import {menuDeOpciones} from "../views/menu-principal.js";


let serviciosInventario = new ServiciosInventario();


(function funcionPrincipal() {
   let ejecutarAccion = async function(opcion) {
      switch (opcion) {
         case "1":
            let cadenaElectrodomestico = await ingresoInventario.ingresarCadenaElectrodomesticos("INGRESO DE PRODUCTOS AL INVENTARIO");
            serviciosInventario.agregarProductosAlInventario(cadenaElectrodomestico);
            break;
         case "2":
            let cadenaDeCompra = await ingresoInventario.ingresarCadenaElectrodomesticos("COMPRA DE ELECTRODOMESTICOS");;
            serviciosInventario.venderProductos(cadenaDeCompra);
            break;
         case "3":
            serviciosInventario.generarFacturaDePago();
            break;   
         default:
            serviciosInventario.mostrarInventario();
            break;
      }
   }
   
   async function menuOpciones() {
      let opcElegida;
      try {
         do {
            opcElegida = await menuDeOpciones.mostrarMenuPrincipal();
            await ejecutarAccion(opcElegida);
         } while(opcElegida != 5)
      } catch(Exception) {
         console.log("Error: " + Exception);
      }
   }
   menuOpciones();
})();




/**let numTelevisores = await ingresoInventario.ingresoNumTelevisores();
         for(let i=0 ; i<numTelevisores ; i++) {
            let televisor = await ingresoInventario.ingresoTelevisor();
            database.agregarTelevisor(televisor)
         }
         let numNeveras = await ingresoInventario.ingresoNumNeveras();
         for(i=0 ; i<numNeveras ; i++) {
            let televisor = await ingresoInventario.ingresoTelevisor();
            database.agregarTelevisor(televisor)
         }
         let numElectrodomesticos = await ingresoInventario.ingresoNumOtrosElectrodomesticos();
         for(i=0 ; i<numElectrodomesticos ; i++) {
            let televisor = await ingresoInventario.ingresoTelevisor();
            database.agregarTelevisor(televisor)
         } */



