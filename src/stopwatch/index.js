import React,{ useState , useRef,useEffect } from 'react'

function Stopwatch  () {
    const [lapse,setLapse] = useState(0)
    const [running,setRunning] = useState(false)

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
                setLapse(Date.now() - startTime)
            },0)
        }
        setRunning(!running)
    }

    function handleClearClick() {
        clearInterval(intervalRef.current)
        setLapse(0)
        setRunning(false)
    }

    return (
        <div style={{textAlign:'center'}}>
            <label
                style={{
                    fontSize:'5em',
                    display:'bloc'
                }}
            >
                {lapse}ms
            </label>
            <br />
            <button onClick={handleRunClick}>{running ? 'stop' : 'start'}</button>
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default Stopwatch