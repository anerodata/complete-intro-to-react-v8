import { createRoot } from "react-dom/client"
import Pet from './Tshirt'
import SearchParams from "./SearchParams"
const App = () => {
  return (
    <div>
      <h1>Awesome t-shirts</h1>
      <SearchParams/>
      <Pet name="Peter" animal="Dog" breed="Havanese" />
      <Pet name="Luna" animal="Cat" breed="Mixed" />
      <Pet name="Londra" animal="Bird" breed="Cockatiel" />
  </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
