import {Electrodomestico} from "../class/Electrodomestico.js";
import {Nevera} from "../class/Nevera.js";
import {Televisor} from "../class/Televisor.js";

import {CarritoCompra} from "../database/carrito-compra.js";

import {Database} from "../database/datos-inventario.js";


export class ServiciosInventario {
   
   constructor() {
      this.database= new Database();
      this.carritoCompra = new CarritoCompra();
   }

   agregarTelevisores(vecCaracteristicas){
      console.log(this.database.getVecTelevisores.length);
      for(let i=0 ; i<vecCaracteristicas[1] ; i++) {
         let televisor = new Televisor(vecCaracteristicas[5],
                                       vecCaracteristicas[2],
                                       vecCaracteristicas[3],
                                       vecCaracteristicas[4]);
                                       // procedencia, tipoConsumo, tamanio, tdt
         // Televisor,Cantidad(1-n),Tipo Consumo(A/B/C),Tamaño(1-n),TDT(Si/No),Procedencia(Nacional/Internacional)
         this.database.agregarTelevisor(televisor);
      }
      console.log(this.database.getVecTelevisores.length);
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
      alert(this.database.getInventario);
   }

   agregarElectrodomesticos(vecCaracteristicas) {
      for(let i=0 ; i<vecCaracteristicas[1] ; i++) {
         let electrodomestico = new Electrodomestico(vecCaracteristicas[3],
                                           vecCaracteristicas[2]);
         // procedencia,tipoConsumo
         // Electrodomestico,Cantidad(1-n),Tipo Consumo(A/B/C),Procedencia(Nacional/Internacional)\n" +
         this.database.agregarElectrodomestico(electrodomestico);
      }
      alert(this.database.getInventario);
   }

   agregarProductosAlInventario(cadenaIngreso){
      let vecCaracteristicas = cadenaIngreso.split(',');
      console.log("Llega hasta aquí" + vecCaracteristicas[0]);

      switch (vecCaracteristicas[0]) {
         case "Televisor":
            this.agregarTelevisores(vecCaracteristicas);
            break;
         case "Nevera":
            this.agregarNeveras(vecCaracteristicas);
            break;
         case "Electrodomestico":
            this.agregarElectrodomesticos(vecCaracteristicas);
            break;
         default:
            break;
      }
   }



   venderProductos(cadenaCompra) {
      let vecCaracteristicas = cadenaCompra.split(',');
      let i;
      console.log("Vec Cadena de venta: " + vecCaracteristicas);
      switch (vecCaracteristicas[0]) {
         case "Televisor":
            for(i=0 ; i<vecCaracteristicas[1] ; i++) {
               let televisor = this.database.venderTelevisor(vecCaracteristicas);
               if(televisor != null) {
                  this.carritoCompra.agregarTelevisor(televisor);
               } else {
                  alert("Artículos agotados, sólo habían " + i + " unidades.");
                  break;
               }
            }
            break;
         case "Nevera":
            for(i=0 ; i<vecCaracteristicas[1] ; i++) {
               let nevera = this.database.venderNevera(vecCaracteristicas);
               if(nevera != null) {
                  this.carritoCompra.agregarNevera(nevera);
               } else {
                  break;
               }
            }
            break;
         case "Electrodomestico":
            for(i=0 ; i<vecCaracteristicas[1] ; i++) {
               let electrodomestico = this.database.venderElectrodomestico(vecCaracteristicas);
               if(electrodomestico != null) {
                  this.carritoCompra.agregarElectrodomestico(electrodomestico);
               } else {
                  break;
               }
            }
            break;
         default:
            break;
      }
   }

   generarFacturaDePago() {
      return this.carritoCompra.generarFactura();
   }

   mostrarInventario() {
      return this.database.getInventario;
   }

}