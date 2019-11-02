import React , { useState } from 'react'

// share logic accros multipe react
function useCounter () {
    const [counter,setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    return {
        counter,
        increment
    }
}

function Counter () {
    const {counter,increment} = useCounter()
    return (
        <div>
            <button onClick={increment}>{counter}</button>
        </div>
    )
}

export default Counter;