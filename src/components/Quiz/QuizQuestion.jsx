"use client"

import { useState } from "react"
import "./QuizQuestion.scss"

const QuizQuestion = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnswerSelect = (answer) => {
    if (isAnimating) return

    setSelectedAnswer(answer)
    setIsAnimating(true)

    setTimeout(() => {
      onAnswer(answer)
      setSelectedAnswer(null)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className={`quiz-question ${isAnimating ? "quiz-question--animating" : ""}`}>
      <div className="quiz-question__header">
        <div className="quiz-question__progress">
          <div className="quiz-question__progress-bar">
            <div
              className="quiz-question__progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
          <span className="quiz-question__progress-text">
            {questionNumber} из {totalQuestions}
          </span>
        </div>
      </div>

      <div className="quiz-question__content">
        <h2 className="quiz-question__title">{question.question}</h2>

        <div className="quiz-question__options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-question__option ${selectedAnswer === option ? "quiz-question__option--selected" : ""}`}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnimating}
            >
              <span className="quiz-question__option-text">{option.answer}</span>
              <span className="quiz-question__option-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizQuestion
