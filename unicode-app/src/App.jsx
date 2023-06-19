import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import UserInput from './UserInput.jsx'
import ResultInput from './ResultInput.jsx'

const App = () => {
  const [ textToConvertHook, setTextToConvertHook ] = useState('')
  return (
  <div>
    <UserInput readOnly={false} onTextToReplaceChange={(value) => {
      setTextToConvertHook(value)
    }} value={textToConvertHook} />
    <ResultInput value={textToConvertHook} />
</div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
