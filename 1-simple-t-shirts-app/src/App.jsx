import { createRoot } from "react-dom/client"
import SearchParams from "./SearchParams"
const App = () => {
  return (
    <div>
      <h1>Awesome t-shirts</h1>
      <SearchParams/>
  </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
