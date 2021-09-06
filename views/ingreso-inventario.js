import{Electrodomestico} from "../class/Electrodomestico.js";
import{Televisor} from "../class/Televisor.js";
import{Nevera} from "../class/Nevera.js";

export const ingresoInventario  = {
    
    ingresoNumTelevisores() {
        do {
            let numTelevisores = window.prompt("Ingrese la cantidad de televisores:");
        } while(typeof(numTelevisores) != "number" || numTelevisores < 0);
        return numTelevisores;
    },

    ingresoNumNeveras() {
        do {
            let numNeveras = window.prompt("Ingrese la cantidad de neveras:");
        } while(typeof(numNeveras) != "number" || numNeveras < 0);
        return numNeveras;
    },

    ingresoNumOtrosElectrodomesticos() {
        do {
            let numElectrodomesticos = window.prompt("Ingrese la cantidad de electrodomésticos generales:");
        } while(typeof(numElectrodomesticos) != "number" || numElectrodomesticos < 0);
        return numElectrodomesticos;
    },

    ingresoTelevisor() {
        let consumo = obtenerConsumo();
        let procedencia = obtenerProcedencia();
        let tamanio = obtenerTamanio();
        let tieneTDT = consultarTDT();
        televisor = new Televisor(procedencia, consumo, tamanio, tieneTDT);
        return televisor;
    },

    ingresoNevera() {
        let consumo = obtenerConsumo();
        let procedencia = obtenerProcedencia();
        let capacidad = obtenerCapacidad();
        nevera = new Nevera(procedencia, consumo, capacidad);
        return nevera;
    },

    ingresoElectrodomestico() {
        let consumo = obtenerConsumo();
        let procedencia = obtenerProcedencia();
        electrodomestico = new Electrodomestico(procedencia, consumo);
        return electrodomestico;
    },

    obtenerCapacidad() {
        let capacidad = -1;
        do {
            capacidad = window.prompt("Ingrese la capacidad de la nevera en litros: ");
        } while(typeof(capacidad) != "number" || capacidad <= 0);
        return capacidad;
    },

    consultarTDT() {
        let opcionElegida;
        let tieneTDT = false;
        do {
            opcionElegida = window.prompt("1.Si.\n" +
                    "2.No.\n" );
        } while(opcionElegida != '1' || opcionElegida != '2');
        tieneTDT = (opcionElegida == '1')?true:false;
        return tieneTDT;
    },

    obtenerTamanio() {
        let tamanio = -1;
        do {
            tamanio = window.prompt("Ingrese el tamaño del televisor en pulgadas:");
        } while(typeof(tamanio) != "number" || tamanio <= 0);
        return tamanio;
    },

    obtenerProcedencia() {
        let opcionElegida;
        let procedencia;
        do {
            opcionElegida = window.prompt("Seleccione la precendecia: \n" +
                    "1. Nacional.\n" +
                    "2. Internacional.\n" );
        } while(opcionElegida != "1" || opcionElegida != "2");
        procedencia = (opcionElegida == '1')?"Nacional":"Internacional";
        return procedencia;
    },

    obtenerConsumo() {
        let tipoConsumo;
        do {
            tipoConsumo = window.prompt("A. tipo A --> 450.\n" +
                    "B. tipo B --> 350.\n" +
                    "C. tipo C --> 250.\n");
        } while(tipoConsumo != "A" || tipoConsumo != "B" || tipoConsumo != "C");
        return tipoConsumo;
    }
}


