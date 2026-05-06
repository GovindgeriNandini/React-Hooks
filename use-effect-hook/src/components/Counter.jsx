import React from "react";
import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count+1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div>
            Count : {count}
        </div>
    );
}

export default Counter;