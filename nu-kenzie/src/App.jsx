import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import Main from './Pages/Main/Main'

const App = () => {

  const [verify, setVerify] = useState(true)

  return (

      verify 
      ? 
      <Home verify={verify} setVerify={setVerify}/> 
      :
      <Main verify={verify} setVerify={setVerify}/>
      
  )
}

export default App