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
}