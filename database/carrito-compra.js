export class CarritoCompra {
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

   calcularPrecioFinal() {
      let precioTotal = this.getCarritoDeCompra.reduce((acum,elem)=>{
         return(elem.getPrecioFinal + acum);
      },0);
      return precioTotal;
   }

   llenarFactura(vecElectrod) {
      let acum="\n";
      for(let i=0 ; i<vecElectrod.length ; i++){
         acum += vecElectrod[i].toString() + '\n';
      }
      return(acum);
   }

   generarFactura() {
      console.log(this.vecTelevisores);
      console.log(this.vecNeveras);
      console.log(this.vecElectrodomesticos);
      let acumFactura = "FACTURA DE COMPRA\n";
      acumFactura += "\nTelevisores: " + this.llenarFactura(this.vecTelevisores);
      acumFactura += "\nNeveras: " + this.llenarFactura(this.vecNeveras);
      acumFactura += "\nElectrodomesticos generales: " + this.llenarFactura(this.getVecElectrodomesticos);
      acumFactura += "\nPrecio Final: " + this.calcularPrecioFinal();
      return acumFactura;
   }

   get getCarritoDeCompra() {
      return([...this.vecTelevisores, ...this.vecNeveras, ...this.vecElectrodomesticos]);
   }
}