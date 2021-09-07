import {Electrodomestico} from "./Electrodomestico.js";

export class Nevera extends Electrodomestico {

   constructor(procedencia,tipoConsumo,capacidad) {
      super(procedencia, tipoConsumo);
      this.capacidad = capacidad;
      this.calcularPrecioFinal();
      this.nombre = "Nevera";
   }

    get getCapacidad() {
        return this.capacidad;
    }

    set setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }

    calcularPrecioFinal(){
        if(this.capacidad > 120) {
            let resto = capacidad - 120;
            resto /= 10;
            resto = Math.floor(resto);

            precioFinal += resto * (0.05 * precioFinal);

            this.precioFinal += (int) (this.precioFinal * 0.3);
        }
    }

    toString() {
        return "Nevera[" +
                "nombre='" + this.nombre +
                ", precio=" + this.precioFinal +
                ", procedencia='" + this.procedencia +
                ", tipoConsumo=" + this.tipoConsumo +
                "capacidad=" + this.capacidad +
                ']';
    }
}
