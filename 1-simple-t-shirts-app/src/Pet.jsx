// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, `${props.label} - ${props.color} - ${props.size}`),
//   ])
// }
const Pet = ({animal, name, breed, images, location, id}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length) {
    hero = images[0]
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h1>{animal} - {breed} - {location}</h1>
      </div>
    </a>
  )
}

export default Pet