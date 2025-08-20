"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import QuizStart from "../../components/Quiz/QuizStart"
import QuizQuestion from "../../components/Quiz/QuizQuestion"
import QuizResult from "../../components/Quiz/QuizResult"
import "./Quiz.scss"

const Quiz = () => {
  const [quizState, setQuizState] = useState("start") // 'start', 'quiz', 'analyzing', 'result'
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  const loadQuestions = async (level) => {
    try {
      const questionsFile = level === 1 ? "questions_easy.json" : "questions_medium.json"
      const response = await fetch(`/api/${questionsFile}`)
      const questionsData = await response.json()
      setQuestions(questionsData)
    } catch (error) {
      console.error("Error loading questions:", error)
      setQuestions([])
    }
  }


  const startQuiz = async (level) => {
    setSelectedLevel(level)
    await loadQuestions(level)
    setQuizState("quiz")
    setCurrentQuestionIndex(0)
    setAnswers([])
  }

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz completed, analyze results
      setQuizState("analyzing")
      setTimeout(() => {
        const calculatedResult = calculateResult(newAnswers)
        setResult(calculatedResult)
        setQuizState("result")
      }, 2000)
    }
  }

  const calculateResult = (userAnswers) => {
    const courseCount = {}

    userAnswers.forEach((answer) => {
      const course = answer.course
      courseCount[course] = (courseCount[course] || 0) + 1
    })

    const recommendedCourse = Object.keys(courseCount).reduce((a, b) => (courseCount[a] > courseCount[b] ? a : b))

    const courseInfo = {
      Frontend: {
        title: "Frontend разработка",
        description: "Создание пользовательских интерфейсов и веб-приложений",
        motivation:
          "Вы обладаете отличным чувством дизайна и пользовательского опыта! Frontend разработка позволит вам создавать красивые и удобные веб-сайты и приложения, которыми будут пользоваться тысячи людей.",
      },
      Backend: {
        title: "Backend разработка",
        description: "Серверная разработка и работа с базами данных",
        motivation:
          "У вас аналитический склад ума и вы любите решать сложные логические задачи! Backend разработка - это основа любого приложения, где вы сможете создавать мощные системы и алгоритмы.",
      },
      "Graphic Design": {
        title: "Графический дизайн",
        description: "Создание визуального контента и дизайна",
        motivation:
          "Вы творческая личность с отличным чувством прекрасного! Графический дизайн позволит вам воплощать идеи в жизнь и создавать визуальный контент, который вдохновляет людей.",
      },
      Unity: {
        title: "Разработка игр на Unity",
        description: "Создание 2D и 3D игр на движке Unity",
        motivation:
          "Вы любите игры и интерактивность! Разработка на Unity откроет вам мир создания собственных игр, где вы сможете воплотить любые фантазии в интерактивную реальность.",
      },
      Scratch: {
        title: "Программирование на Scratch",
        description: "Основы программирования для детей",
        motivation:
          "Вы отлично подходите для изучения основ программирования! Scratch поможет вам понять логику программирования через визуальное программирование и создание интересных проектов.",
      },
    }

    return {
      course: recommendedCourse,
      ...courseInfo[recommendedCourse],
      confidence: Math.round((courseCount[recommendedCourse] / userAnswers.length) * 100),
    }
  }

  const restartQuiz = () => {
    setQuizState("start")
    setSelectedLevel(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setAnswers([])
    setResult(null)
  }

  if (quizState === "start") {
    return <QuizStart onStart={startQuiz} />
  }

  if (quizState === "quiz" && questions.length > 0) {
    return (
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    )
  }

  if (quizState === "analyzing") {
    return (
      <div className="quiz-analyzing">
        <div className="quiz-analyzing__content">
          <div className="quiz-analyzing__spinner"></div>
          <h2 className="quiz-analyzing__title">Анализируем ваши ответы...</h2>
          <p className="quiz-analyzing__text">Подбираем идеальный курс для вас</p>
        </div>
      </div>
    )
  }

  if (quizState === "result" && result) {
    return <QuizResult result={result} onRestart={restartQuiz} />
  }

  return (
    <div className="quiz-error">
      <h2>Произошла ошибка при загрузке теста</h2>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  )
}

export default Quiz
