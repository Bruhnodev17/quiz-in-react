import { useContext } from "react"
import { Quizcontext } from "../context/quiz"

import Quiz from "../img/quiz.svg"
import "./Welcome.css"

const Welcome = () => {

    const quizState = useContext(Quizcontext)

    console.log(quizState)
  
  return (
    <div id="welcome">
      <h2>Seja Bem Vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome
