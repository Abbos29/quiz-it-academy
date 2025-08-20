"use client"

import { BrowserRouter } from "react-router-dom"
import App from "../src/App"
import "../src/styles/variables.scss"
import "../src/styles/global.scss"

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
