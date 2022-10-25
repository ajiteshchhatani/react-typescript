import * as React from 'react';

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function handleCount() {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <div>
                Count is {count}
            </div>
            <button type='button' onClick={handleCount}>Count</button>
        </>
    )
}

