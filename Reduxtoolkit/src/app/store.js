import { configureStore } from '@reduxjs/toolkit'
/**configureStore is a utility that simplifies the setup of the Redux store by providing sensible defaults, such as adding middleware like redux-thunk and enabling the Redux DevTools extension automatically. */
import counterReducer from '../Counter/counterSlice'
/**The counterReducer is responsible for handling actions and updating the state for the counter slice.
js */
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
/**configureStore is used to create the Redux store and configure it with the necessary reducers.
The reducer key is an object that combines all the reducers for different slices of your application. In this case, there’s only one slice (counter), which is handled by the counterReducer.
The counter: counterReducer line means that the counter slice of the Redux state will be managed by the counterReducer */

/**The store is then exported so it can be used in the application, usually by providing it to a <Provider> component to make the Redux state available to the entire React app. */
/**a slice represents a portion or section of the overall Redux state, along with the corresponding reducers and actions that manage it. */
/**State: The initial state of this particular part of the application (e.g., counter).
Reducers: Functions that define how the state should be updated in response to actions.
Actions: Redux actions that are created automatically for each reducer function in the slice. */
/** By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state. */