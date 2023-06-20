import { useState } from 'react'
const ConverterSection = (props) => {
const [_, setTextToReplaceHook ] = useState(props.value)
  return (
    <section>
      <textarea value={props.value} cols="30" rows="10" onChange={(e) => {
        const newText = e.target.value
        setTextToReplaceHook(newText)
        props.onTextToReplaceChange(newText)
      }}>
      </textarea>
      <textarea readOnly value={props.valueModified} cols="30" rows="10">
      </textarea>
    </section>
  )
}
export default ConverterSection
