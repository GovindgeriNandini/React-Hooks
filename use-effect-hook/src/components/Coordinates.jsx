import React from "react";
import { useEffect, useState } from "react";


const Coordinates = () => {
    const[x, setX] = useState(0);

    const[y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('Mousemove', logMousePosition);
        return () => {
            console.log('component unmounting code');
            window.removeEventListener('Mousemove', logMousePosition);
        };
        
    }, [])

    const logMousePosition = (e) => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
            <h2>
                X - {x}, Y - {y}
            </h2>
        </div>
    );

}
export default Coordinates;