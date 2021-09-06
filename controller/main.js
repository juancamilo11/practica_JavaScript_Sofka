import {Electrodomestico} from "../class/Electrodomestico.js";
import {Nevera} from "../class/Nevera.js";
import {Televisor} from "../class/Televisor.js";

import {Database} from "../database/datos-inventario.js";

import {generarFactura} from "../services/generacion-factura.js";
import {serviciosInventario} from "../services/servicios-inventario.js";

import {ingresoInventario} from "../views/ingreso-inventario.js";
import {menuDeOpciones} from "../views/menu-principal.js";

//Variables globales
let database = new Database();

(function funcionPrincipal() {
   let ejecutarAccion = async function(opcion) {
      switch (opcion) {
         case "1":
            await ingresoInventario.ingresarElectrodomestico()
            break;
         case "2":
            servicios
            break;
         case "3":
            
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
            
            
         } while(opcElegida != 5)
      } catch(Exception) {
         console.log("Errorrr" + Exception);
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



