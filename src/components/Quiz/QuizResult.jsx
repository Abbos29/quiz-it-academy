"use client"
import Link from "next/link"
import Button from "../../ui/Button/Button"
import "./QuizResult.scss"

const QuizResult = ({ result, onRestart }) => {
  return (
    <div className="quiz-result">
      <div className="quiz-result__content">
        <div className="quiz-result__header">
          <div className="quiz-result__icon">🎯</div>
          <h1 className="quiz-result__title">Ваш результат готов!</h1>
          <p className="quiz-result__subtitle">На основе ваших ответов мы подобрали идеальное направление</p>
        </div>

        <div className="quiz-result__card">
          <div className="quiz-result__course-header">
            <h2 className="quiz-result__course-title">{result.title}</h2>
            <div className="quiz-result__confidence">Совпадение: {result.confidence}%</div>
          </div>

          <p className="quiz-result__course-description">{result.description}</p>

          <div className="quiz-result__motivation">
            <h3>Почему это направление вам подходит:</h3>
            <p>{result.motivation}</p>
          </div>

          <div className="quiz-result__actions">
            <Button size="large">Записаться на курс</Button>
            <Link to="/courses">
              <Button variant="secondary" size="large">
                Посмотреть все курсы
              </Button>
            </Link>
          </div>
        </div>

        <div className="quiz-result__footer">
          <p className="quiz-result__footer-text">
            Не согласны с результатом? Попробуйте пройти тест еще раз или выберите другой уровень сложности.
          </p>
          <Button variant="outline" onClick={onRestart}>
            Пройти тест заново
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuizResult
