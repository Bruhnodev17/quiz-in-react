import { createContext, useReducer } from "react"
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) => {
  // eslint-disable-next-line no-empty
  switch(action.type){
    case "CHANGE_STATE":
    return {
      ...state,
      gameStage: STAGES[1],
    }

    case "REORDER_QUESTIONS":
      // eslint-disable-next-line no-case-declarations
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5
      })
      return{
        ...state,
        questions: reorderedQuestions
      }

      case "CHANGE_QUESTION":
        // eslint-disable-next-line no-case-declarations
        const nextQuestion = state.currentQuestion + 1
        // eslint-disable-next-line no-case-declarations
        let endGame = false 
          if(!questions[nextQuestion]){
            endGame = true
          }

          return {
            ...state, currentQuestion: nextQuestion,
            gameStage: endGame ? STAGES[2] : state.gameStage,
          }

    default:
        return state
  }
}

export const Quizcontext = createContext()

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {

    const value = useReducer(quizReducer,initialStage)
    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
}