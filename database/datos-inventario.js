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
      let televisorComprado = null;
      this.vecTelevisores.forEach((tv,index,vecTelevisores) => {
         if (tv == tvComprar) {
            televisorComprado = tv;
            vecTelevisores.splice(index,1);
            break;
         }
      });
      return(televisorComprado);
   }

   venderNevera(neveraComprar) {
      let neveraComprada = null;
      this.vecNeveras.forEach((nevera,index,vecNeveras) => {
         if (nevera == neveraComprar) {
            neveraComprada = nevera;
            vecNeveras.splice(index,1);
            break;
         }
      });
      return(neveraComprada);
   }

   venderElectrodomestico(electrodComprar) {
      let electComprado = null;
      this.vecNeveras.forEach((electrod,index,vecElectrodomesticos) => {
         if (electrod == electrodComprar) {
            electComprado = electrod;
            vecElectrodomesticos.splice(index,1);
            break;
         }
      });
      return(electComprado);
   }

   get getInventario() {
      return([...this.vecTelevisores, ...this.vecNeveras, ...this.vecElectrodomesticos]);
   }
}