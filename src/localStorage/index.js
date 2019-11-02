import React , { useState,useEffect } from 'react'

// share logic accros multipe react
function useCounter () {
    const initialState = () => Number(window.localStorage.getItem('counter') || 0)
    const [counter,setCounter] = useState(initialState)
    const increment = () => setCounter(counter + 1)
    // use effect without passing argument only run on cdm
    // run after render
    useEffect(() => {
        window.localStorage.setItem('counter',counter)   
    },[counter]) //re render every state changes
    return {
        counter,
        increment
    }
}

function LocalStorage () {
    const {counter,increment} = useCounter()
    return (
        <div>
            <button onClick={increment}>{counter}</button>
        </div>
    )
}

export default LocalStorage;