import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import Converter from './Converter.jsx'
import TextToConvertContext from './TextToConvertContext.jsx'

const App = () => {
  const textToConvertHook = useState('')
  return (
    <TextToConvertContext.Provider value={textToConvertHook}>
      <Converter/>
      <Converter/>
    </TextToConvertContext.Provider>
  )
}
const rootContainer = document.querySelector('#root')
const root = createRoot(rootContainer)
root.render(<App/>)
