import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import ConverterInput from './ConverterInput.jsx'

const App = () => {
  const [ textToConvertHook, setTextToConvertHook ] = useState('')
  return (
  <div>
    <ConverterInput readOnly={false} onTextToReplaceChange={(value) => {
      setTextToConvertHook(value)
    }} value={textToConvertHook} />
    <ConverterInput value={textToConvertHook} readOnly={true} />
</div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
