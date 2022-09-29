import React from "react";


const CrudTable =({usuarios, seteditDatos, eliminarUsuario}) =>{
    return(
        <table className="table" id="tabla">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Edad</th>
                    <th></th>
                </tr>
                
                {
                    usuarios.length == 0 ? <th>No hay datos</th>
                    : usuarios.map((usuarios, index) =>{
                        return(
                            <tr key={index}>
                                <th>{usuarios.id}</th>
                                <th>{usuarios.nombre}</th>
                                <th>{usuarios.apellido}</th>
                                <th>{usuarios.edad}</th>
                                <th>
                                <button onClick={() => seteditDatos(usuarios)}>Editar </button> {/*ejecuta la funcion al hacer click */}
                                <button onClick={() => eliminarUsuario(usuarios.id)}>Eliminar</button>

                                </th>
                            </tr>
                        )

                    }) 
                }
        </thead>
                    
        </table>

    );
}

export default CrudTable;