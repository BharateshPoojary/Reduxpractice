import { applyMiddleware, legacy_createStore } from "redux";
import reducers from './reducers/combined-reducers.jsx'
import { thunk } from "redux-thunk";
export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk))
/**A Redux store is created using the legacy_createStore function.
It uses redux-thunk middleware to handle asynchronous actions.
The reducers are responsible for managing the state, and the initial state is set to an empty object {}.
store is then exported, which will allow other parts of your application to access the Redux store. 
legacy_createStore(reducers , initialstate, middleware e.g.thunk for handling async logic )
here middleware are basically used to handle or to do perform some task before ACTION reach out to REDUCERS
*/