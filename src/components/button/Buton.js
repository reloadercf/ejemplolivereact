import React from 'react';

function Buton({texto, logica}){
    
    let handleAgregar=()=>{
        console.log("Esto esta agregando")
    }
    let handleBorrar=()=>{
        console.log("Esto esta borrando")
    }


    return (
    <div>
        {logica==="agregar"?
        <button onClick={()=>handleAgregar()}>
            {texto}
        </button>:
        logica==="borrar"?
        <button onClick={()=>handleBorrar()}>
            {texto}
        </button>:null
        }
    </div>
    )
} 
export default Buton;