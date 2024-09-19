import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </StrictMode>,
)
