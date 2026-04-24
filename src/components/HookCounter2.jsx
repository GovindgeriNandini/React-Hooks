import { useState } from "react";
import React  from 'react';


const HookCounter2 = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    return(
        <div>
            <span>Count : {count} </span>
            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={() => setCount(count+1)}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>

        </div>

    );
}
export default HookCounter2;