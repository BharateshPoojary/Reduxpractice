import { useSelector } from "react-redux"
import Home from "./Home.jsx"
function App() {
  const amountstate = useSelector(state => state.amount)
  return (
    <>
      <h2 style={{ marginLeft: '10px' }}>Your Current Balance: {amountstate}</h2>
      <Home />
    </>
  )
}

export default App
/**useSelector is a hook provided by React-Redux that allows function components to access the Redux store's state.
It takes a function as an argument (often called a selector function) and returns a portion of the Redux state based on the logic in the function.
state => state.amount:

This is the selector function passed to useSelector. It tells useSelector what part of the Redux state to retrieve.
state represents the entire Redux state (the global state object managed by your reducers).
state.amount accesses the specific part of the state that is managed by a reducer (likely named amount in this case).
const amountstate:

amountstate is the variable that stores the value of state.amount (i.e., the part of the Redux state that holds the amount data).
This variable can now be used within the React component to read and display the current state of amount. */
