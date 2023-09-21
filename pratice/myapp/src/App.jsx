import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import Home from './container/Home'
import Index from './routes'
import { Provider } from 'react-redux'
import store from './components/Store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
      
  )
}

export default App
