import Link from "next/link"
import Button from "../../ui/Button/Button"

const Result = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Результаты теста</h1>
      <p>Эта страница будет показывать результаты теста после его прохождения.</p>
      <Link to="/quiz">
        <Button>Пройти тест</Button>
      </Link>
    </div>
  )
}

export default Result
