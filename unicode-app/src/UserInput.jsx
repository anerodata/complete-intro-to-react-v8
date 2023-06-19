import { useState } from 'react'
const UserInput = (props) => {
const [textToReplaceHook, setTextToReplaceHook ] = useState(props.value)
  return (
    <section>
      <textarea readOnly={props.readOnly} value={props.value} cols="30" rows="10" onChange={(e) => {
        const newText = e.target.value
        setTextToReplaceHook(newText)
        props.onTextToReplaceChange(newText)
      }}>
      </textarea>
    </section>
  )
}
export default UserInput
