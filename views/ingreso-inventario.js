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
}