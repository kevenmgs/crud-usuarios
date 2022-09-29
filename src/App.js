import './App.css';
import Tabla from './componentes/Tabla';
import Capturar from './componentes/Capturar';
import CrudForm from './componentes/crudform';
import CrudTable from './componentes/crudtable';
import { useEffect, useState } from 'react';
//import Agregar from './componentes/Agregar';



function App() {

  
  const [editdatos, seteditDatos]= useState (null); //Variable de estado para guardar la info que se va a cambiar
  const [usuarios, setUsuarios]= useState (() =>{
    const guardarUsuarios = window.localStorage.getItem("usuariosguardados");
    if (guardarUsuarios){
      return JSON.parse(guardarUsuarios);
    }else{
      return []
    }
  });

    useEffect(()=>{
      window.localStorage.setItem("usuariosguardados", JSON.stringify(usuarios))
    },[usuarios])

  // Inserccion de datos 
  function addUsuarios (usuario){
    console.log(usuario);
    setUsuarios([
      ...usuarios,
        usuario
    ])
  }

  //Editar informacion
  const editUsuarios = (usuario)=>{
    const   nuevosUsusarios =usuarios.map( el => el.id === usuario.id ? usuario : el)
    //Se creo nuevo arreglo apartir del original donde va a comparar el id del usuario seleccionado
    console.log(usuario)
    setUsuarios(nuevosUsusarios) //Mandamos los nuevos valores
    seteditDatos(null) //Limpiamos para que no contenga info
  }

  //Eliminar informacion

    const eliminarUsuario = id =>{
      const accepeliminacion = window.confirm(`¿Deseas eliminar ese registro con el id:${id}`)
      
      if (accepeliminacion){  
        const nuevosUsusarios = usuarios.filter(el => el.id !== id)
        setUsuarios(nuevosUsusarios);
      }
      
      console.log(id);
    }


  return (
    
    <div className="App">
      <h1>Crud Datos</h1>
      <CrudForm addUsuarios={addUsuarios} editdatos={editdatos} editUsuarios={editUsuarios}/>
      <CrudTable usuarios = {usuarios} seteditDatos ={seteditDatos} eliminarUsuario={eliminarUsuario}/>
    </div>
    
   
  );
}

export default App;