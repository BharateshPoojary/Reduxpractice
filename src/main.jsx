import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './state/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
/*The Provider component is responsible for making the Redux store available to any React component nested within it The Provider component is used to "wrap" your entire application.
It takes a store prop, which is the Redux store created earlier.
This ensures that any component within the Provider can access the global Redux store and dispatch actions or retrieve the state using connect or useSelector/useDispatch hooks from react-redux*/

