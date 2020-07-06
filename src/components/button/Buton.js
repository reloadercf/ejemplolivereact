import React from 'react';

function Buton({texto, logica}){
    
    


    return (
    <div>
        <button onClick={()=>logica()}>
            {texto}
        </button>
    </div>
    )
} 
export default Buton;