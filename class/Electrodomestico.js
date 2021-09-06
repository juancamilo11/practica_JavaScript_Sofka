
export class Electrodomestico {
   
   constructor(procedencia,tipoConsumo){
      this.procedencia=procedencia;
      this.tipoConsumo=tipoConsumo;
      this.calcPrecioFinalElec();
      this.nombre="Electrodoméstico Generico";
   }

   get getNombre() {
      return this.nombre;
   }

   set setNombre(nombre) {
      this.nombre = nombre;
   }

   get getPrecioFinal() {
      return this.precioFinal;
   }

   set setPrecio(precio) {
      this.precioFinal = precio;
   }

   get getProcedencia() {
      return this.procedencia;
   }

   set setProcedencia(procedencia) {
      this.procedencia = procedencia;
   }

   get getTipoConsumo() {
      return this.tipoConsumo;
   }

   set setTipoConsumo(tipoConsumo) {
      this.tipoConsumo = tipoConsumo;
    }

   getPrecioPorTipoConsumo() {
      let precioPorConsumo = 0;
      switch(this.tipoConsumo) {
         case 'A':
            precioPorConsumo = 450000;
            break;
         case 'B':
            precioPorConsumo = 350000;
            break;
         case 'C':
            precioPorConsumo = 250000;
            break;
         default:
            break;
      }
      return precioPorConsumo;
    }
   
   getPrecioPorProcedencia() {
      let precioPorProcedencia = 0;
      switch(this.procedencia) {
         case "Internacional":
            precioPorProcedencia = 350000;
            break;
         case "Nacional":
            precioPorProcedencia = 250000;
            break;
         default:
            break;
      }
        return precioPorProcedencia;
    }

   calcPrecioFinalElec(){
      this.precioFinal += this.getPrecioPorTipoConsumo();
      this.precioFinal += this.getPrecioPorProcedencia();
    }

   toString() {
      return "Electrodomestico[" +
            "nombre='" + this.nombre + '\'' +
            ", precio=" + this.precioFinal +
            ", procedencia='" + this.procedencia + '\'' +
            ", tipoConsumo=" + this.tipoConsumo +
            ']';
    }

}