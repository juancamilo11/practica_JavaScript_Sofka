export const menuDeOpciones = {   
   mostrarMenuPrincipal() {
      let opcionElegida;
      do {
         opcionElegida =  window.prompt("Ingrese a continuación una opción: \n" +
               "1. Ingresar productos al inventario.\n" +
               "2. Comprar un electrodoméstico.\n" +
               "3. Generar factura de pago.\n" +
               "4. Revisar el inventario.\n" +
               "5. Salir").charAt(0);
      } while(opcionElegida < '1' || opcionElegida > '5');
      return opcionElegida;
   }
}

