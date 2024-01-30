import { useContext, useEffect } from 'react'
import { Quizcontext } from './context/quiz'

import Welcome from './components/Welcome'
import Questions from './components/Questions'

function App() {
  const [quizState, dispatch] = useContext(Quizcontext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  

  return (
    <>
      <div className='App'>
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Questions />}
      </div>
    </>
  )
}

export default App
