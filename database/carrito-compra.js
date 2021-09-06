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

   calcularPrecioTotal() {
      let precioTotal = this.vecTelevisores.reduce((acum,elem)=>{
         return(elem.getPrecioFinal() + acum);
      });
   }

   generarFactura() {
      let acumFactura = "FACTURA DE COMPRA\n";
      acumFactura += "Televisores: " + this.vecTelevisores;
      acumFactura += "Neveras: " + this.vecNeveras;
      acumFactura += "Electrodomesticos generales: " + this.getVecElectrodomesticos;
      acumFactura += "Precio Final: " + this.calcularPrecioFinal();
   }

   get getCarritoDeCompra() {
      return([...this.vecTelevisores, ...this.vecNeveras, ...this.vecElectrodomesticos]);
   }

}