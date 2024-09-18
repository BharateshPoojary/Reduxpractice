import React from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { amountstateactioncreatorsaccess } from './state/action-creators-access'
const Home = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const { depositMoney } = bindActionCreators(amountstateactioncreatorsaccess, dispatch);
    return (
        <div className='container'>
            <div>

                <div style={{ display: 'flex' }}>
                    <button onClick={() => { depositMoney(100) }}>+</button><h3>Updated balance {balance}</h3><button onClick={() => { dispatch(amountstateactioncreatorsaccess.withdrawMoney(100)) }}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Home
