import React,{ useReducer , useRef,useEffect } from 'react'


function reducer (currentState,newState) {
    return {...currentState,...newState}
}

function useStopwatch() {
        /*
      *useReducer have two argument one argument as reducer
      *second Argument state or initial state  
    */
    const [{lapse,running},setState] = useReducer(reducer,{
        running : false,
        lapse : 0
    })

    const intervalRef = useRef(null)

    useEffect(() => {
        return  () => clearInterval(intervalRef.current)
    },[])

    function handleRunClick(){
        if(running) {
            clearInterval(intervalRef.current)
        }else{
            const startTime = Date.now() - lapse
        intervalRef.current =  setInterval(() => {
            setState({lapse: Date.now() - startTime})
            },0)
        }
        setState({running:!running})
    }

    function handleClearClick() {
        clearInterval(intervalRef.current)
        setState({lapse : 0,running:false})
    }

    return {
        handleRunClick,
        handleClearClick,
        lapse,
        running
    }
}

function StopWatch  () {
    const stopwatchOne = useStopwatch()
    const stopwatchTwo = useStopwatch()
    return (
        <div style={{textAlign:'center'}}>
            <label
                style={{
                    fontSize:'5em',
                    display:'block'
                }}
            >
                {stopwatchOne.lapse}ms
            </label>
            <br />
            <button onClick={stopwatchOne.handleRunClick}>{stopwatchOne.running ? 'stop' : 'start'}</button>
            <button onClick={stopwatchOne.handleClearClick}>Clear</button>
            <hr />

            <label
                style={{
                    fontSize:'5em',
                    display:'block'
                }}
            >
                {stopwatchTwo.lapse}ms
            </label>
            <br />
            <button onClick={stopwatchTwo.handleRunClick}>{stopwatchOne.running ? 'stop' : 'start'}</button>
            <button onClick={stopwatchTwo.handleClearClick}>Clear</button>
        </div>
    )
}

export default StopWatch