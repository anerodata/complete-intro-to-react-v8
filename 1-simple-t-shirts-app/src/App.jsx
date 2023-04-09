import { createRoot } from "react-dom"
import Tshirt from './Tshirt'
const App = () => {
  return (
    <div>
      <h1>Awesome t-shirts</h1>
      <Tshirt label="Nike" color="Grey" size="Large" />
      <Tshirt label="Tribord" color="Black" size="Extra large" />
      <Tshirt label="Reebok" color="Red" size="Medium" />
  </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
