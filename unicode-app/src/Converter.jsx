import { useState } from 'react'
const Converter = (props) => {
const [ textToReplace, updateTextToReplace ] = useState('') 
  return (
    <section>
      { textToReplace }
      <textarea cols="30" rows="10" onChange={(e) => {
        updateTextToReplace(e.target.value)
      }}>
      </textarea>
    </section>
  )
}
export default Converter
