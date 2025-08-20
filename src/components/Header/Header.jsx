import { Link, useLocation } from "react-router-dom"
import Container from "../../ui/Container/Container"
import "./Header.scss"

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/courses", label: "Курсы" },
    { path: "/quiz", label: "Тест" },
    { path: "/contacts", label: "Контакты" },
  ]

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Link to="/" className="header__logo">
            IT Academy
          </Link>
          <nav className="header__nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`header__nav-link ${location.pathname === item.path ? "header__nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
