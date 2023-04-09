import { createRoot } from "react-dom"
import Pet from './Tshirt'
const App = () => {
  return (
    <div>
      <h1>Awesome t-shirts</h1>
      <Pet name="Peter" animal="Dog" breed="Havanese" />
      <Pet name="Luna" animal="Cat" breed="Mixed" />
      <Pet name="Londra" animal="Bird" breed="Cockatiel" />
  </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
