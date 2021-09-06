export const ingresoInventario  = {

    async ingresarCadenaElectrodomesticos(titulo) {
    let cadenaCaracteristicas;
    do {
        cadenaCaracteristicas = await window.prompt(titulo + "\nIngrese a continuación una cadena separada " +
        "por comas(,) donde estén contenidos los siguientes caracteres: \n"+
                "1. Para un televisor:\n" +
                "  Televisor,Cantidad(1-n),Tipo Consumo(A/B/C),Tamaño(1-n),TDT(Si/No),Procedencia(Nacional/Internacional)\n" +
                "  Ejemplo: Televisor,30,A,55,Si,Nacional\n\n" +

                "2. Para una nevera:\n" +
                "  Nevera,Cantidad(1-n),Tipo Consumo(A/B/C),Capacidad(1-n),Procedencia(Nacional/Internacional)\n" +
                "  Ejemplo: Nevera,10,B,250,Internacional\n\n" +

                "3. Para un Electrodomestico general:\n" +
                "  Electrodomestico,Cantidad(1-n),Tipo Consumo(A/B/C),Procedencia(Nacional/Internacional)\n" +
                "  Ejemplo: Electrodomestico,5,C,Nacional\n");
        
    } while(cadenaCaracteristicas == null || !this.laCadenaEsValida(cadenaCaracteristicas));
    return cadenaCaracteristicas;
    },

    laCadenaEsValida(cadenaCaracteristicas) {
        let esValida = false;
        let vecCaracteristicas = cadenaCaracteristicas.split(",");
        if(vecCaracteristicas.length < 4 || vecCaracteristicas.length > 6){ 
            window.alert("La cadena ingresada para el ingreso de electrodomésticos tiene un formato inválido.");
            return false;
        }
        switch (vecCaracteristicas[0]) {
            case "Televisor":
                esValida = this.validarCadenaTelevisor(vecCaracteristicas);
                break;
            case "Nevera":
                esValida = this.validarCadenaNevera(vecCaracteristicas);
                break;
            case "Electrodomestico":
                esValida = this.validarCadenaElectrodomestico(vecCaracteristicas);
                break;
            default:
                break;
        }
        return esValida;
    },

    validarCantConsumoProced(cantidad, tipoConsumo, procedencia) {
        return((cantidad > 0) && 
            (tipoConsumo.toLowerCase() == 'a' || tipoConsumo.toLowerCase() == 'b' || tipoConsumo.toLowerCase() == 'c') &&
            (procedencia.toLowerCase() == 'nacional' || procedencia.toLowerCase() == 'internacional'));
    },

    validarTDT(tdt) {
        return(tdt.toLowerCase() == "si" || tdt.toLowerCase() == "no");
    },

    validarTamanio(tamanio) {
        return tamanio > 0;
    },

    validarCapacidad(capacidad) {
        return capacidad > 0;
    },

    validarCadenaTelevisor(vecCaracteristicas) {
        //"Televisor,Cantidad(1-n),Tipo Consumo(A/B/C),Tamaño(1-n),TDT(Si/No),Procedencia(Nacional/Internacional)\n" +
        let esValida = this.validarCantConsumoProced(vecCaracteristicas[1],vecCaracteristicas[2],vecCaracteristicas[5]) &&
                       this.validarTamanio(vecCaracteristicas[3]) &&
                       this.validarTDT(vecCaracteristicas[4]);
        return esValida;
    },

    validarCadenaNevera(vecCaracteristicas) {
       //"Nevera,Cantidad(1-n),Tipo Consumo(A/B/C),Capacidad(1-n),Procedencia(Nacional/Internacional)\n" +
        let esValida = this.validarCantConsumoProced(vecCaracteristicas[1],vecCaracteristicas[2],vecCaracteristicas[4]) &&
                       this.validarCapacidad(vecCaracteristicas[3]);
        return esValida;
    },

    validarCadenaElectrodomestico(vecCaracteristicas) {
       //"Electrodomestico,Cantidad(1-n),Tipo Consumo(A/B/C),Procedencia(Nacional/Internacional)\n" +
        let esValida = this.validarCantConsumoProced(vecCaracteristicas[1],vecCaracteristicas[2],vecCaracteristicas[3]);
        return esValida;
    }





    
//     async elegirElectrodomestico() {
//     let opcionElegida;
//     do {
//         opcionElegida = await window.prompt("Ingrese a continuación una opción: \n" +
//             "1.Televisor.\n" +
//             "2.Nevera.\n" +
//             "3.Otro\n").charAt(0);
//     } while(typeof(opcionElegida) != "number" || opcionElegida < '1' || opcionElegida > '3');
//     return opcionElegida;
//    },

//     ingresoTelevisor() {
//         let cantidad = obtenerCantidad();
//         let consumo = obtenerConsumo();
//         let procedencia = obtenerProcedencia();
//         let tamanio = obtenerTamanio();
//         let tieneTDT = consultarTDT();
        
//         televisor = new Televisor(procedencia, consumo, tamanio, tieneTDT);
        
//         return televisor;
//     },

//     ingresoNevera() {
//         let cantidad = obtenerCantidad();
//         let consumo = obtenerConsumo();
//         let procedencia = obtenerProcedencia();
//         let capacidad = obtenerCapacidad();
//         nevera = new Nevera(procedencia, consumo, capacidad);
//         return nevera;
//     },

//     ingresoElectrodomestico() {
//         let cantidad = obtenerCantidad();
//         let consumo = obtenerConsumo();
//         let procedencia = obtenerProcedencia();
//         electrodomestico = new Electrodomestico(procedencia, consumo);
//         return electrodomestico;
//     },

//     obtenerCapacidad() {
//         let capacidad = -1;
//         do {
//             capacidad = window.prompt("Ingrese la capacidad de la nevera en litros: ");
//         } while(typeof(capacidad) != "number" || capacidad <= 0);
//         return capacidad;
//     },

//     consultarTDT() {
//         let opcionElegida;
//         let tieneTDT = false;
//         do {
//             opcionElegida = window.prompt("1.Si.\n" +
//                     "2.No.\n" );
//         } while(opcionElegida != '1' || opcionElegida != '2');
//         tieneTDT = (opcionElegida == '1')?true:false;
//         return tieneTDT;
//     },

//     obtenerTamanio() {
//         let tamanio = -1;
//         do {
//             tamanio = window.prompt("Ingrese el tamaño del televisor en pulgadas:");
//         } while(typeof(tamanio) != "number" || tamanio <= 0);
//         return tamanio;
//     },

//     obtenerProcedencia() {
//         let opcionElegida;
//         let procedencia;
//         do {
//             opcionElegida = window.prompt("Seleccione la precendecia: \n" +
//                     "1. Nacional.\n" +
//                     "2. Internacional.\n" );
//         } while(opcionElegida != "1" || opcionElegida != "2");
//         procedencia = (opcionElegida == '1')?"Nacional":"Internacional";
//         return procedencia;
//     },

//     obtenerConsumo() {
//         let tipoConsumo;
//         do {
//             tipoConsumo = window.prompt("A. tipo A --> 450.\n" +
//                     "B. tipo B --> 350.\n" +
//                     "C. tipo C --> 250.\n");
//         } while(tipoConsumo != "A" || tipoConsumo != "B" || tipoConsumo != "C");
//         return tipoConsumo;
//     },

//     obtenerCantidad() {
//         let cantidad;
//         do {
//             cantidad = window.prompt("A. tipo A --> 450.\n" +
//                     "B. tipo B --> 350.\n" +
//                     "C. tipo C --> 250.\n");
//         } while(cantidad != "A" || cantidad != "B" || cantidad != "C");
//         return cantidad;
//     }
}


