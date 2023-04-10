import { useState, useEffect } from "react"
import useBreedList from "./useBreedList"
import Pet from './Tshirt'
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]
const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)
  // And effect runs every single time you re-rends the application
  // By passing an empty array of dependencies variables, it will only run once. At the beggining
  useEffect(() => {
    requestPets()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json()
    setPets(json.pets)
  }
  // Same as:
  // const locationHook = useState("")
  // const location = locationHook[0]
  // const setLocation = locationHook[1]
  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault()
        requestPets()
      }}>
        <label htmlFor="location">
          Location
        </label>
        <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location"/>
        <label htmlFor="animal">
          Location
        </label>
        <select
          id="animal"
          value={animal}
          onChange={e => {
            setAnimal(e.target.value)
            setBreed("")
          }}>
          <option/>
          {ANIMALS.map(animal => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">
          Breed
        </label>
        <select
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          disabled={breeds.length === 0}
        >
          <option/>
          {breeds.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      {
        pets.map(pet => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      }
    </div>
  )
}
export default SearchParams
