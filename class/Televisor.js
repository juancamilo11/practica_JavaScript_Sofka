import {Electrodomestico} from "./Electrodomestico.js";

export class Televisor extends Electrodomestico{

   constructor(procedencia, tipoConsumo, tamanio, tdt) {
      super(procedencia, tipoConsumo);
      this.tamanio = tamanio;
      this.tdt = tdt;
      this.calcularPrecioFinal();
      this.nombre = "Televisor";
    }

   get getTamanio() {
      return this.tamanio;
   }

   set setTamanio(tamanio) {
      this.tamanio = tamanio;
    }

   get isTdt() {
      return this.tdt;
   }

   set setTdt(tdt) {
      this.tdt = tdt;
   }

   calcularPrecioFinal() {
      if(this.tamanio > 40) {
         this.precioFinal += this.precioFinal * 0.3;
      }
      if(this.tdt) {
         this.precioFinal += 250000;
      }
   }

   toString() {
      return "Televisor[" +
            "nombre='" + this.nombre + '\'' +
            ", precioFinal=" + this.precioFinal +
            ", procedencia='" + this.procedencia + '\'' +
            ", tipoConsumo=" + this.tipoConsumo +
            ", tamanio=" + this.tamanio +
            ", tdt=" + this.tdt +
            ']';
   }
}



