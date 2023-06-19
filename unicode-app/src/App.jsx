import { createRoot } from 'react-dom/client'
import Converter from './Converter.jsx'

const App = () => {
  return (
    <div>
      <Converter/>
    </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
