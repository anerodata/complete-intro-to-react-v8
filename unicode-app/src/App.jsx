import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import ConverterSection from './ConverterSection.jsx'

const App = () => {
  const [ textToConvertHook, setTextToConvertHook ] = useState('')
  return (
  <div>
    <ConverterSection readOnly={false} onTextToReplaceChange={(value) => {
      setTextToConvertHook(value)
    }} value={textToConvertHook} />
</div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
