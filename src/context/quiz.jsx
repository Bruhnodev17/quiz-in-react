import { createContext } from "react"

export const Quizcontext = createContext()

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {

    const value = {name: "Quiz"}
    return <Quizcontext.Provider value={value}>{children}</Quizcontext.Provider>
}