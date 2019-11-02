import React, { useState } from 'react'

function App() {
    const [fistName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    return (
        <div>
            <label htmlFor="first-name-input">First Name</label>
            <input
                id="first-name-input"
                onChange={e => setFirstName(e.target.value)}
            />

            <label htmlFor="first-name-input">Last Name</label>
            <input
                id="last-name-input"
                onChange={e => setLastName(e.target.value)}
            />  
        </div>
    )
}

export default App