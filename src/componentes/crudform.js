import React, { useEffect, useState } from "react";

const CrudForm = ({addUsuarios, editUsuarios,editdatos}) => {
    
    useEffect ( () =>{ //Cada que cambie un estado va a cambiar la variable 
        if(editdatos !== null){
        setformDatos(editdatos) //Mandamos al form la infromacion que vamos  a cambiar
        console.log(editdatos);
        }else{                  //Si no lo mandamos como un vacio
            setformDatos({
                nombre: '',
                apellido: '',
                edad: '',
                id: null
            })
        }
    }, [editdatos]
    )

    const [formDatos, setformDatos] = useState ({
        nombre: '',
        apellido: '',
        edad: '',
        id: null
    })

    const subirSubmit =(e) =>{
        e.preventDefault(); //Evita que se cargue la pagina
        //console.log(formDatos);
          
        if(formDatos.nombre !== '' && formDatos.apellido !== '' && formDatos.edad !== ''){
            if(editdatos !== null){
                editUsuarios(formDatos);
            }else{
                formDatos.id = Date.now() 
                //Math.floor(Math.random() * 100) ///Genera un valor entero con decimal y con .floor queda solo el entero
                addUsuarios(formDatos) //Usamos la destructuracion y lo resivimos de la App.js como props y le mandammos los datos
                setformDatos({
                    nombre: '',
                    apellido: '',
                    edad: '',
                    id: null
                })
            }
        }   else{
            alert("Por favor agregue los datos completos")
        }
    }

    const subirCambio =(e) =>{
        setformDatos({ //Actualizando variable de estado
            ...formDatos, //Destructuracion de los datos y hace una copia de  los elementos
            [e.target.name]: e.target.value
        })
    }

    
    
    return(
        <form onSubmit={subirSubmit}>
            <input type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={subirCambio} value={formDatos.nombre}></input>
            <input type="text" name="apellido" placeholder="Ingresa tu apellido paterno"  onChange={subirCambio} value={formDatos.apellido}></input>
            <input type="text" name="edad" placeholder="Ingresa tu Edad"  onChange={subirCambio} value={formDatos.edad}></input>
            <input type="submit" value="Agregar"></input>
            <input type="reset" value="Limpiar"></input>
            <input type="reset" value="borrar"></input>


        </form>
    );
}

export default CrudForm;