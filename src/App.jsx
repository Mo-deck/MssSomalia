import { useState } from "react"
import Header from "./components/header/Header"
import  Timer  from "./components/timer/Timer"
import Competitors from "./components/competitors/Competitors"
import { VoteModal } from "./components/modal/voteModal"
function App() {

  return (
    <div className="App">
      <Header />
      <Timer />
      <Competitors />
      <VoteModal />
    </div>
  )
  
}

export default App
