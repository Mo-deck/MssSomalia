import { useState } from "react"
import Header from "./components/header/Header"
import  Timer  from "./components/timer/Timer"
import Competitors from "./components/competitors/Competitors"
function App() {

  return (
    <div className="App">
      <Header />
      <Timer />
      <Competitors />
    </div>
  )
  
}

export default App
