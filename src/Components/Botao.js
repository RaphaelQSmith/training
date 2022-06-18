import React, {useState, useEffect} from 'react';

export default function Botao(){

    const [total, setTotal] = useState(0);
    
    useEffect(() =>{
        return function handleButton(){
            if(total===0){
                return;
            }
            setTotal(total + 1 )

        }
    }  
    );

   
    return( <>
    <input type="button" value={total} onClick={() => setTotal(total+1)} />
    <h3>{total}</h3>
    </>
    )

    
}