import { useState } from "react"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]
const SearchParams = () => {
  const [location, setLocation] = useState("Houston, TX")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const BREEDS = ["1"]
  // Same as:
  // const locationHook = useState("")
  // const location = locationHook[0]
  // const setLocation = locationHook[1]
  return (
    <div className="search-params">
      <form>
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
          disabled={BREEDS.length === 0}
        >
          <option/>
          {BREEDS.map(breed => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button type="button">Submit</button>
      </form>
    </div>
  )
}
export default SearchParams
