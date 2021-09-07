import { Nevera } from "../class/Nevera.js";
import { Televisor } from "../class/Televisor.js";

export class Database {
   
   constructor() {
      this.vecTelevisores = [];
      this.vecNeveras = [];
      this.vecElectrodomesticos = [];
   }

   get getVecTelevisores() {
      return this.vecTelevisores;
   }

   get getVecNeveras() {
      return this.vecNeveras;
   }

   get getVecElectrodomesticos() {
      return this.vecElectrodomesticos;
   }

   agregarTelevisor(televisor) {
      this.vecTelevisores.push(televisor);
   }

   agregarNevera(nevera) {
      this.vecNeveras.push(nevera);
   }

   agregarElectrodomestico(electrodomestico) {
      this.vecElectrodomesticos.push(electrodomestico);
   }

   obtenerTelevisorParaVender(cadenaTV) {
      let vecTV = String(cadenaTV).split(",");
      let televisor = new Televisor(vecTV[5], vecTV[2], vecTV[3], vecTV[4]);
      return televisor;
   }

   venderTelevisor(tvComprar) {
      let televisorAComprar = this.obtenerTelevisorParaVender(tvComprar);
      for(let i=0 ; i<this.vecTelevisores.length ; i++) {
         if (this.vecTelevisores[i].toString() == televisorAComprar.toString()) {
            televisorAComprar = this.vecTelevisores[i];
            this.vecTelevisores.splice(i,1);
            break;
         }
      }
      return(televisorAComprar);
   }

   obtenerNeveraParaVender(cadenaNevera) {
      let vecNevera = String(cadenaNevera).split(",");
      let nevera = new Nevera(vecNevera[4], vecNevera[2], vecNevera[3]);
      
      return nevera;
   }

   venderNevera(neveraComprar) {
      let neveraAComprar = this.obtenerNeveraParaVender(neveraComprar);
      for(let i=0 ; i<this.vecNeveras.length ; i++) {
         if (this.vecNeveras[i].toString() == neveraAComprar.toString()) {
            neveraAComprar = this.vecNeveras[i];
            this.vecNeveras.splice(i,1);
            break;
         }
      }
      return(neveraAComprar);
   }

   obtenerElectrodParaVender(cadenaElectrod) {
      let vecElectrod = String(cadenaElectrod).split(",");
      let electrod = new Nevera(vecElectrod[3], vecElectrod[2]);
      return electrod;
   }

   venderElectrodomestico(electrodComprar) {
      let electrodAComprar = this.obtenerElectrodParaVender(electrodComprar);
      for(let i=0 ; i<this.vecElectrodomesticos.length ; i++) {
         if (this.vecElectrodomesticos[i].toString() == electrodAComprar.toString()) {
            electrodAComprar = this.vecElectrodomesticos[i];
            this.vecElectrodomesticos.splice(i,1);
            break;
         }
      }
      return(electrodAComprar);
   }

   get getInventario() {
      let vecInventario = [...this.vecTelevisores, ...this.vecNeveras, ...this.vecElectrodomesticos];
      let acum="";
      for (let i=0 ; i<vecInventario.length ; i++) {
         acum += vecInventario[i].toString();
      }
      return(acum);
   }
}