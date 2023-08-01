import { useState } from 'react'
import Cadastro from './pages/cadastro'
import Home from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cadastro/>
    </>
  )
}

export default App
