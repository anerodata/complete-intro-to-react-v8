// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, `${props.label} - ${props.color} - ${props.size}`),
//   ])
// }
import { Link } from 'react-router-dom'
const Pet = ({animal, name, breed, images, location, id}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length) {
    hero = images[0]
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h1>{animal} - {breed} - {location}</h1>
      </div>
    </Link>
  )
}

export default Pet
