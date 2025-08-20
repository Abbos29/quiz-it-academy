"use client"
import Button from "../../ui/Button/Button"
import "./QuizStart.scss"

const QuizStart = ({ onStart }) => {
  return (
    <div className="quiz-start">
      <div className="quiz-start__content">
        <h1 className="quiz-start__title">Тест на определение IT-направления</h1>
        <p className="quiz-start__description">
          Пройдите короткий тест из 8 вопросов, чтобы мы могли подобрать для вас идеальный IT-курс. Выберите уровень
          сложности вопросов:
        </p>

        <div className="quiz-start__levels">
          <div className="level-card">
            <div className="level-card__header">
              <h3 className="level-card__title">Уровень 1</h3>
              <span className="level-card__badge level-card__badge--easy">Очень лёгкий</span>
            </div>
            <p className="level-card__description">
              Для тех, кто вообще не знаком с IT. Простые вопросы о предпочтениях и интересах.
            </p>
            <ul className="level-card__features">
              <li>Подходит для детей от 8 лет</li>
              <li>Простые житейские вопросы</li>
              <li>Без технических терминов</li>
            </ul>
            <Button onClick={() => onStart(1)} className="level-card__button" size="large">
              Выбрать уровень 1
            </Button>
          </div>

          <div className="level-card">
            <div className="level-card__header">
              <h3 className="level-card__title">Уровень 2</h3>
              <span className="level-card__badge level-card__badge--medium">Чуть посложнее</span>
            </div>
            <p className="level-card__description">
              Для тех, кто пользовался компьютером, но не разбирается в IT. Вопросы о привычках и опыте.
            </p>
            <ul className="level-card__features">
              <li>Подходит для подростков и взрослых</li>
              <li>Вопросы о компьютерном опыте</li>
              <li>Учитывает практические навыки</li>
            </ul>
            <Button onClick={() => onStart(2)} className="level-card__button" size="large" variant="secondary">
              Выбрать уровень 2
            </Button>
          </div>
        </div>

        <div className="quiz-start__info">
          <div className="quiz-start__info-item">
            <span className="quiz-start__info-icon">⏱️</span>
            <span>5-7 минут</span>
          </div>
          <div className="quiz-start__info-item">
            <span className="quiz-start__info-icon">❓</span>
            <span>8 вопросов</span>
          </div>
          <div className="quiz-start__info-item">
            <span className="quiz-start__info-icon">🎯</span>
            <span>Персональная рекомендация</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizStart
