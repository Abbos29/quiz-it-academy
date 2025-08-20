import Button from "../../ui/Button/Button"
import "./Courses.scss"

const Courses = () => {
  const courses = [
    {
      id: "frontend",
      title: "Frontend разработка",
      description: "Создание пользовательских интерфейсов и веб-приложений",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      duration: "8 месяцев",
      level: "Начинающий",
    },
    {
      id: "backend",
      title: "Backend разработка",
      description: "Серверная разработка и работа с базами данных",
      technologies: ["Python", "Node.js", "SQL", "API"],
      duration: "8 месяцев",
      level: "Средний",
    },
    {
      id: "graphic-design",
      title: "Графический дизайн",
      description: "Создание визуального контента и дизайна",
      technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
      duration: "4 месяца",
      level: "Начинающий",
    },
    {
      id: "unity",
      title: "Разработка игр на Unity",
      description: "Создание 2D и 3D игр на движке Unity",
      technologies: ["Unity", "C#", "3D моделирование", "Анимация"],
      duration: "10 месяцев",
      level: "Средний",
    },
    {
      id: "scratch",
      title: "Программирование на Scratch",
      description: "Основы программирования для детей",
      technologies: ["Scratch", "Алгоритмы", "Логика", "Творчество"],
      duration: "3 месяца",
      level: "Детский",
    },
  ]

  return (
    <div className="courses">
      <div className="courses__header">
        <h1 className="courses__title">Наши курсы</h1>
        <p className="courses__subtitle">
          Выберите направление, которое вас интересует, или пройдите тест для персональной рекомендации
        </p>
      </div>

      <div className="courses__grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card__header">
              <h3 className="course-card__title">{course.title}</h3>
              <span className="course-card__level">{course.level}</span>
            </div>

            <p className="course-card__description">{course.description}</p>

            <div className="course-card__info">
              <div className="course-card__duration">
                <strong>Длительность:</strong> {course.duration}
              </div>
            </div>

            <div className="course-card__technologies">
              <h4>Технологии:</h4>
              <div className="course-card__tech-list">
                {course.technologies.map((tech, index) => (
                  <span key={index} className="course-card__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="course-card__actions">
              <Button>Записаться</Button>
              <Button variant="outline">Подробнее</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
