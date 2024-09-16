import React, { useState } from 'react'
import './Home.css'
const Home = () => {
    const [count, setCount] = useState(25000);
    return (
        <div className='container'>
            <div>
                <h2 style={{ marginLeft: '10px' }}>Your Current Balance: {count}</h2>
                <div style={{ display: 'flex' }}>
                    <button onClick={() => { setCount(count + 100) }}>+</button><h3>Update balance </h3><button onClick={() => { setCount(count - 100) }}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Home
