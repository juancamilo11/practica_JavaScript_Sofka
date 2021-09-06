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

   venderTelevisor(tvComprar) {
      let adquirido = false;
      this.vecTelevisores.forEach((tv,index,vecTelevisores) => {
         if (tv == tvComprar) {
            vecTelevisores.splice(index,1);
            adquirido = index;
            break;
         }
      });

      return(adquirido);
   }

   venderNevera(neveraComprar) {
      let posicion = -1;
      this.vecNeveras.forEach((nevera,index,vecTelevisores) => {
         if (nevera == neveraComprar) {
            posicion = index;
            break;
         }
      });
      return(posicion);
   }

   venderElectrodomestico(electrodomestico) {
      this.vecElectrodomesticos.push(electrodomestico);
   }
}