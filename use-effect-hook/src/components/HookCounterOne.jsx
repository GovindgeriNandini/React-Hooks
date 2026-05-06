
import React, {use, useEffect, useState} from 'react';

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('updating document title')
        document.title = `You clicked ${count} times`;
    }, [count]);

    return(
        <div>
            <input type = 'text' value = {name} onChange={ e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </div>
    );

}
export default HookCounterOne;