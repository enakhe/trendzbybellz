import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import Home from "./features/Home/Home"
import BackToTopButton from "./components/Buttons/BackToTopButton"
import "./App.css"

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </Fragment>
  )
}

export default App
