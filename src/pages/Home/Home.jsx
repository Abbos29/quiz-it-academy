import Link from "next/link"
import Button from "../../ui/Button/Button"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">
          Добро пожаловать в <span className="home__title-accent">IT Academy</span>
        </h1>
        <p className="home__subtitle">
          Откройте мир IT-технологий вместе с нами! Пройдите тест и найдите идеальный курс для себя или своего ребенка.
        </p>
        <div className="home__actions">
          <Link to="/quiz">
            <Button size="large">Пройти тест</Button>
          </Link>
          <Link to="/courses">
            <Button variant="secondary" size="large">
              Посмотреть курсы
            </Button>
          </Link>
        </div>
      </div>

      <div className="home__features">
        <div className="home__feature">
          <div className="home__feature-icon">🎯</div>
          <h3 className="home__feature-title">Персональный подход</h3>
          <p className="home__feature-text">Наш тест поможет определить наиболее подходящее направление в IT</p>
        </div>
        <div className="home__feature">
          <div className="home__feature-icon">👨‍🏫</div>
          <h3 className="home__feature-title">Опытные преподаватели</h3>
          <p className="home__feature-text">Обучение ведут практикующие специалисты с многолетним опытом</p>
        </div>
        <div className="home__feature">
          <div className="home__feature-icon">🚀</div>
          <h3 className="home__feature-title">Современные технологии</h3>
          <p className="home__feature-text">Изучайте актуальные инструменты и технологии IT-индустрии</p>
        </div>
      </div>
    </div>
  )
}

export default Home
