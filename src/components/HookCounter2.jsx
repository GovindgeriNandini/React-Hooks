import { useState } from "react";
import React  from 'react';


const HookCounter2 = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const handleIncrement5 = () => {
        for(let i = 0; i < 5 ; i++){
            setCount(count+1);
        }
    };

    return(
        <div>
            <span>Count : {count} </span>
            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={() => setCount(count+1)}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>
            <button onClick={handleIncrement5}>Increment by 5 </button>

        </div>

    );
}
export default HookCounter2;