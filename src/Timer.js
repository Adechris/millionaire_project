import {React, useState, useEffect} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(30)
    useEffect(() => {
    const interval = setTimeout(()=>{
        setTimer(prev=>prev -1)
    },1000)
        
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Timer
