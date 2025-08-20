import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Courses from "./pages/Courses/Courses"
import Quiz from "./pages/Quiz/Quiz"
import Result from "./pages/Result/Result"
import Container from "./ui/Container/Container"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Container>
      </main>
    </div>
  )
}

export default App
