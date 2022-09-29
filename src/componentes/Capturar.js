import React from "react";
import Agregar from "./Agregar";

function Capturar(){
    function Persona(nombre,apellidoP , edad){
        this.nombre =nombre;
        this.apellidoP=apellidoP,
        this.edad =edad;
    }
    var nombreCapturar = nombre.value;
    //console.log(nombreCapturar);
    var edadCapturar = apellido.value;
    //console.log(edadCapturar);
    var apellidoPCapturar = edad.value;

    var nuevoSujeto = new Persona (nombreCapturar, apellidoPCapturar , edadCapturar);
    console.log(nuevoSujeto);
    //agregar();
};
export default Capturar;