import React from 'react'
import { useState } from 'react'
import PageOne from './Components/Page01/PageOne.jsx'
import Pagetwo from './Components/Page02/Pagetwo.jsx'
// import StartGame from './Components/startergame.jsx'
import './App.css'
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    console.log('toggle btn')
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {isGameStarted ? <Pagetwo /> : <PageOne toggle={toggleGameplay} />}


    </>
  )
}

export default App
