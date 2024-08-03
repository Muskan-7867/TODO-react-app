import React from 'react'
import Apptodo from './components/Apptodo'
import './App.css'

import Todos from './components/todos'
import Navbar from './components/navbar'

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
     <Apptodo />
     <Todos />
    </main>
  )
}

export default App