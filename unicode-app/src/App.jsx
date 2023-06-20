import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import ConverterSection from './ConverterSection.jsx'

const App = () => {
  const [ textModifiedHook, setTextModifiedHook ] = useState('')
  return (
    <div>
      <ConverterSection onTextToReplaceChange={(value) => {
        setTextModifiedHook(value+'sss')
      }} valueModified={textModifiedHook} />
    </div>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
