// const tShirt = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, `${props.label} - ${props.color} - ${props.size}`),
//   ])
// }
const tShirt = (props) => {
  return (
    <div>
      <h1>${props.label} - ${props.color} - ${props.size}</h1>
      <h1>${props.label} - ${props.color} - ${props.size}</h1>
      <h1>${props.label} - ${props.color} - ${props.size}</h1>
    </div>
  )
}

export default tShirt
