import {Electrodomestico} from "../class/Electrodomestico.js";
import {Nevera} from "../class/Nevera.js";
import {Televisor} from "../class/Televisor.js";

import { Database } from "../database/datos-inventario.js";


export class ServiciosInventario {
   
   constructor() {
      this.database= new Database();
   }

   agregarTelevisores(vecCaracteristicas){
      for(let i=0 ; i<vecCaracteristicas[1] ; i++) {
         let televisor = new Televisor(vecCaracteristicas[5],
                                       vecCaracteristicas[2],
                                       vecCaracteristicas[3],
                                       vecCaracteristicas[4]);
         // procedencia, tipoConsumo, tamanio, tdt
         // Televisor,Cantidad(1-n),Tipo Consumo(A/B/C),Tamaño(1-n),TDT(Si/No),Procedencia(Nacional/Internacional)
         this.database.agregarTelevisor(televisor);
      }
   }

   agregarNeveras(vecCaracteristicas) {
      for(let i=0 ; i<vecCaracteristicas[1] ; i++) {
         let nevera = new Nevera(vecCaracteristicas[4],
                                 vecCaracteristicas[2],
                                 vecCaracteristicas[3]);
         // procedencia,tipoConsumo,capacidad
         // Nevera,Cantidad(1-n),Tipo Consumo(A/B/C),Capacidad(1-n),Procedencia(Nacional/Internacional)\n" +
         this.database.agregarNevera(nevera);
      }
      
   }

   agregarElectrodomesticos(vecCaracteristicas) {
      for(let i=0 ; i<vecCaracteristicas[1] ; i++) {
         let electrodomestico = new Nevera(vecCaracteristicas[3],
                                           vecCaracteristicas[2]);
         // procedencia,tipoConsumo
         // Electrodomestico,Cantidad(1-n),Tipo Consumo(A/B/C),Procedencia(Nacional/Internacional)\n" +
         this.database.agregarElectrodomestico(electrodomestico);
      }
   }

   agregarProductosAlInventario(cadenaIngreso){
      let vecCaracteristicas = cadenaIngreso.split();
      switch (vecCaracteristicas[0]) {
         case "Televisor":
            agregarTelevisores(vecCaracteristicas);
            break;
         case "Nevera":
            agregarNeveras(vecCaracteristicas);
            break;
         case "Electrodomestico":
            agregarElectrodomesticos(vecCaracteristicas);
            break;
         default:
            break;
      }
   }

   venderProductos(inventario) {

   }

   generarFacturaDePago() {

   }

   mostrarInventario() {

   }

}