
import './App.css'
import { incrementByAmount, decrement } from './Counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const count = useSelector((state) => state.counter.value)
  /*useSelector is used to access the initial state here state is an object  which  contains multiple slices or states
 we are accessing the counter slice here */
  const dispatch = useDispatch();
  /**useDispatch hook is used to dispatch the actions which will be handled by the corresponding reducer function  */
  return (
    <>
      <button onClick={() => { dispatch(incrementByAmount(20)) }}>+</button> Count is {count}<button onClick={() => { dispatch(decrement()) }}>-</button>
    </>
  )
}

export default App
