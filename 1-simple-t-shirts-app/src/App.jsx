import { createRoot } from "react-dom/client"
import SearchParams from "./SearchParams"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./Details"
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Awesome t-shirts</h1>
        <SearchParams/>
        <Routes>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
