// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, `${props.label} - ${props.color} - ${props.size}`),
//   ])
// }
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name} - {props.animal} - {props.breed}</h1>
    </div>
  )
}

export default Pet
