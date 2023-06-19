import { useState } from 'react'
import { useContext } from 'react'
import TextToConvertContext from './TextToConvertContext.jsx'
const Converter = (props) => {
const [textToReplace, setTextToReplace ] = useContext(TextToConvertContext)
  return (
    <section>
      <textarea value={textToReplace} cols="30" rows="10" onChange={(e) => {
        setTextToReplace(e.target.value)
      }}>
      </textarea>
    </section>
  )
}
export default Converter
