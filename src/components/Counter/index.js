import {useState} from 'react';

export const Counter = () => {
/*     const countState = useState(0);
    const count = countState[0];
    const setCount = countState[1]; */

    const [count, setCount] = useState(1);
    
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count * 5)}>Click</button>
        </div>
    )
}