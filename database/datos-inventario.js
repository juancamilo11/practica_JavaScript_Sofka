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
         // console.log("1" +this.vecTelevisores[i].toString());
         // console.log("2" +televisorAComprar.toString());
         if (this.vecTelevisores[i].toString() == televisorAComprar.toString()) {
            televisorAComprar = this.vecTelevisores[i];
            this.vecTelevisores.splice(i,1);
            break;
         }
      }
      return(televisorAComprar);
   }

   venderNevera(neveraComprar) {
      let neveraComprada = null;
      let seleccionado = false;
      this.vecNeveras.forEach((nevera,index,vecNeveras) => {
         if (!seleccionado && nevera == neveraComprar) {
            neveraComprada = nevera;
            vecNeveras.splice(index,1);
            seleccionado = true;
         }
      });
      return(neveraComprada);
   }

   venderElectrodomestico(electrodComprar) {
      let electComprado = null;
      let seleccionado = false;
      this.vecNeveras.forEach((electrod,index,vecElectrodomesticos) => {
         if (!seleccionado && electrod == electrodComprar) {
            electComprado = electrod;
            vecElectrodomesticos.splice(index,1);
            seleccionado = true;
         }
      });
      return(electComprado);
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