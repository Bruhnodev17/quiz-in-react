import { useContext } from "react"
import { Quizcontext } from "../context/quiz"

import "./Option.css"


const Option = ({option}) => {

  const [quizState, dispatch] = useContext(Quizcontext)

  return (
    <div className="option">
      <p>{option}</p>
    </div>
  )
}

export default Option
